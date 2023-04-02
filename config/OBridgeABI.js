module.exports = {
    "abi": [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "transferId",
              "type": "bytes32"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "token_amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "eth_amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "hashlock",
              "type": "bytes32"
            },
            {
              "indexed": false,
              "internalType": "uint64",
              "name": "timelock",
              "type": "uint64"
            },
            {
              "indexed": false,
              "internalType": "uint64",
              "name": "srcChainId",
              "type": "uint64"
            },
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "srcTransferId",
              "type": "bytes32"
            }
          ],
          "name": "LogNewTransferIn",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "transferId",
              "type": "bytes32"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "hashlock",
              "type": "bytes32"
            },
            {
              "indexed": false,
              "internalType": "uint64",
              "name": "timelock",
              "type": "uint64"
            },
            {
              "indexed": false,
              "internalType": "uint64",
              "name": "dstChainId",
              "type": "uint64"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "dstAddress",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint64",
              "name": "bidId",
              "type": "uint64"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokenDst",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amountDst",
              "type": "uint256"
            }
          ],
          "name": "LogNewTransferOut",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "transferId",
              "type": "bytes32"
            },
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "preimage",
              "type": "bytes32"
            }
          ],
          "name": "LogTransferConfirmed",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "transferId",
              "type": "bytes32"
            }
          ],
          "name": "LogTransferRefunded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "approveOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "basisPointsRate",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_sender",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_receiver",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_token_amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_eth_amount",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "_hashlock",
              "type": "bytes32"
            },
            {
              "internalType": "uint64",
              "name": "_timelock",
              "type": "uint64"
            },
            {
              "internalType": "bytes32",
              "name": "_preimage",
              "type": "bytes32"
            }
          ],
          "name": "confirm",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "maximumFee",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "nextOwner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_sender",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_receiver",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_token_amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_eth_amount",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "_hashlock",
              "type": "bytes32"
            },
            {
              "internalType": "uint64",
              "name": "_timelock",
              "type": "uint64"
            }
          ],
          "name": "refund",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "rate",
              "type": "uint256"
            }
          ],
          "name": "setBasisPointsRate",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            }
          ],
          "name": "setMaximumFee",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "toll",
              "type": "address"
            }
          ],
          "name": "setTollAddress",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "tollAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_sender",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_dstAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_token_amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_eth_amount",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "_hashlock",
              "type": "bytes32"
            },
            {
              "internalType": "uint64",
              "name": "_timelock",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "_srcChainId",
              "type": "uint64"
            },
            {
              "internalType": "bytes32",
              "name": "_srcTransferId",
              "type": "bytes32"
            }
          ],
          "name": "transferIn",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_sender",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_bridge",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "_hashlock",
              "type": "bytes32"
            },
            {
              "internalType": "uint64",
              "name": "_timelock",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "_dstChainId",
              "type": "uint64"
            },
            {
              "internalType": "uint256",
              "name": "_dstAddress",
              "type": "uint256"
            },
            {
              "internalType": "uint64",
              "name": "_bidId",
              "type": "uint64"
            },
            {
              "internalType": "uint256",
              "name": "_tokenDst",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_amountDst",
              "type": "uint256"
            }
          ],
          "name": "transferOut",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "name": "transfers",
          "outputs": [
            {
              "internalType": "enum OBridge.TransferStatus",
              "name": "",
              "type": "uint8"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ]
}