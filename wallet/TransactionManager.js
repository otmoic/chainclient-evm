const { ethers } = require("ethers");

let CACHE_KEY_LOCAL_PADDING_LIST = "CACHE_KEY_LOCAL_PADDING_LIST"
let CACHE_KEY_LOCAL_SUCCEED_LIST = "CACHE_KEY_LOCAL_SUCCEED_LIST"
let CACHE_KEY_LOCAL_FAILED_LIST = "CACHE_KEY_LOCAL_FAILED_LIST"

const getGasPrice = async (flag, evm_config) => {
    switch (evm_config.system_chain_id) {
        case "9006"://BSC
            if (evm_config.chain_id === 97 || evm_config.chain_id === '97')
                return 10000000010;
            else
                return 5000000010;
        case "9000"://AVAX
            return 26000000010;
        default:
            break;
    }
}

class TransactionCheckLoop {
    constructor(wallet, paddingListHolder, evmRpcClient, evm_config){
        this.wallet = wallet
        this.paddingListHolder = paddingListHolder
        this.evmRpcClient = evmRpcClient
        this.evm_config = evm_config
        this.fail_num = 0

        this.check()
    }

    check = async() => {

        let lfirstData = this.paddingListHolder.getFirst()
        if(lfirstData == undefined){
            setTimeout(this.check, 3000)
            return
        }
        lfirstData = JSON.parse(lfirstData)
        let lfirst = {}
        Object.assign(lfirst, lfirstData)
        delete lfirst.rawData

        //dev test
        // lfirst.transactionHash = "0xb5e12372396142bc6d02a60e66607060cf8e455ee339c6b4e67a7d2c66cb6227"

        console.log("lfirst:")
        console.log(lfirst)

        lfirst.chainId = parseInt(lfirst.chainId)       
        //check tx state
        //switch send
        //or
        //wait(check state) and update DB
        if(lfirst.transactionHash == undefined) {
            console.group("send new transaction")
            //get gas_price
            let gas_price = await getGasPrice(lfirst.gasPrice, this.evm_config)
            lfirst.gasPrice = gas_price
            //get limit
            let provider = new ethers.providers.JsonRpcProvider(this.evm_config.rpc_url)
            let client = await this.wallet.getWallet(lfirst.from)
            client = client.connect(provider)

            try {
                lfirst.value = ethers.BigNumber.from(lfirst.value)
                lfirst.gasLimit = 500000
                let gas_limit = await client.estimateGas(lfirst)
                console.log("gas_limit:")
                console.log(gas_limit)
                
                lfirst.gasLimit = gas_limit.add(10000)
                let transactionSended = await client.sendTransaction(lfirst)
                console.log("transactionSended:")
                console.log(transactionSended)

                lfirstData.transactionHash = transactionSended.hash
                lfirstData.sended = transactionSended
                await this.paddingListHolder.updateTransactionNow(lfirstData)
                this.fail_num = 0
            } catch (err) {
                if(
                    err.reason == "execution reverted: ERC20: insufficient allowance" 
                || err.reason == "execution reverted: ERC20: transfer amount exceeds allowance"
                || err.reason == "execution reverted: BEP20: transfer amount exceeds allowance"){
                    await this.paddingListHolder.jumpApprove(lfirstData)
                } else {
                    console.log('this.fail_num:', this.fail_num)
                    this.fail_num++
                    if(this.fail_num >= 5){
                        lfirstData.error = err
                        this.paddingListHolder.onTransactionFailed(lfirstData)
                        this.fail_num = 0
                    }
                }
                console.error(err)
            }

            console.groupEnd()
        } else {
            console.log("transactionHash:", lfirst.transactionHash)
            let provider = new ethers.providers.JsonRpcProvider(this.evm_config.rpc_url)
            let transactionReceipt = await provider.getTransactionReceipt(lfirst.transactionHash)
            console.log("transactionReceipt:")
            console.log(transactionReceipt)

            if(transactionReceipt != undefined && transactionReceipt != null){
                lfirstData.transactionReceipt = transactionReceipt

                if(transactionReceipt.status == 1) {
                    // 更新队列
                    this.paddingListHolder.onTransactionNowSucceed(lfirstData)
    
                } else {
                    //TODO Throws Error
                }
            }

 
        }


        setTimeout(this.check, 3000)
    }

}

class TransactionManager {
    constructor(){}

    setConfig = async (redis, wallet, evmRpcClient, evm_config) => {
        this.redis = redis
        this.local_padding_list = []
        this.wallet = wallet
        this.evm_config = evm_config

        CACHE_KEY_LOCAL_PADDING_LIST = `${CACHE_KEY_LOCAL_PADDING_LIST}_${evm_config.system_chain_id}`
        CACHE_KEY_LOCAL_SUCCEED_LIST = `${CACHE_KEY_LOCAL_SUCCEED_LIST}_${evm_config.system_chain_id}`
        CACHE_KEY_LOCAL_FAILED_LIST = `${CACHE_KEY_LOCAL_FAILED_LIST}_${evm_config.system_chain_id}`

        if(evm_config.clear_padding == true) {
            await this.redis.del(CACHE_KEY_LOCAL_PADDING_LIST)
        }
        
        let num = await this.redis.llen(CACHE_KEY_LOCAL_PADDING_LIST)
        this.local_padding_list = await this.redis.lrange(CACHE_KEY_LOCAL_PADDING_LIST, 0, num)
        console.log("local_padding_list:")
        console.log(this.local_padding_list)

        this.checkLoop = new TransactionCheckLoop(wallet, this, evmRpcClient, evm_config)
    }

    onTransactionFailed = async (transactionData) => {
        transactionData = JSON.stringify(transactionData)
        await this.redis.blpop(CACHE_KEY_LOCAL_PADDING_LIST, 1)
        await this.redis.rpush(CACHE_KEY_LOCAL_FAILED_LIST, transactionData)
        this.local_padding_list.shift()
    }

    onTransactionNowSucceed = async (transactionData) => {
        transactionData = JSON.stringify(transactionData)
        await this.redis.blpop(CACHE_KEY_LOCAL_PADDING_LIST, 1)
        await this.redis.rpush(CACHE_KEY_LOCAL_SUCCEED_LIST, transactionData)
        this.local_padding_list.shift()
    }

    updateTransactionNow = async (transactionData) => {
        this.local_padding_list[0] = JSON.stringify(transactionData)
        await this.redis.blpop(CACHE_KEY_LOCAL_PADDING_LIST, 1)
        await this.redis.lpush(CACHE_KEY_LOCAL_PADDING_LIST, this.local_padding_list[0])
    }

    jumpApprove = async (transaction) => {

        console.log("jumpApprove")
        
        let walletInfos = await this.wallet.getWalletInfo()
        let token =  ethers.BigNumber.from(transaction.rawData.token).toHexString()
        let wallet = walletInfos.filter(info => info.token.toLowerCase() == token.toLowerCase() && info.wallet_name == transaction.rawData.sender_wallet_name)[0]
        
        console.log("token:", token)
        console.log("balance:", wallet.balance_value.toString())

        let erc20Interface = new ethers.utils.Interface(this.evm_config.abi.erc20)
        let calldata = erc20Interface.encodeFunctionData("approve", [
            transaction.to,
            wallet.balance_value
        ])

        let transactionRequest = {
            to          : token,
            from        : wallet.wallet_address,
            data        : calldata,
            value       : 0,
            gasPrice    : transaction.gasPrice,
            chainId     : this.evm_config.chain_id,
        }

        this.local_padding_list.unshift(JSON.stringify(transactionRequest))
        await this.redis.lpush(CACHE_KEY_LOCAL_PADDING_LIST, this.local_padding_list[0])
    }

    getFirst = () => {
        return this.local_padding_list.length > 0 ? this.local_padding_list[0] : undefined
    }

    getPaddingList = async () => {

    }

    sendTransactionLocalPadding = async (transactionRequest) => {

        let newTransactionRequest = JSON.stringify(transactionRequest)
        await this.redis.rpush(CACHE_KEY_LOCAL_PADDING_LIST, newTransactionRequest)
        this.local_padding_list.push(newTransactionRequest)
    }

    //Content to be optimized
    sendTransactionChainPadding = async () => {

    }

    //Content to be optimized
    sendTransactionFastest = async () => {

    }

    cancelPaddingTransaction = async () => {

    }

    getStatus = async () => {
        return {
            padding : this.local_padding_list
        }
    }
}

module.exports = TransactionManager