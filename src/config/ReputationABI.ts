export default {
    "abi": [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                }
            ],
            "name": "AddressEmptyCode",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ComplaintTagNoExists",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "DomainNoExists",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "bidId",
                    "type": "bytes32"
                }
            ],
            "name": "DuplicateBidId",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ECDSAInvalidSignature",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "length",
                    "type": "uint256"
                }
            ],
            "name": "ECDSAInvalidSignatureLength",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "ECDSAInvalidSignatureS",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "implementation",
                    "type": "address"
                }
            ],
            "name": "ERC1967InvalidImplementation",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ERC1967NonPayable",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "FailedInnerCall",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidInitialization",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "signer",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "InvalidSigner",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "NotInitializing",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "OwnableInvalidOwner",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "OwnableUnauthorizedAccount",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UUPSUnauthorizedCallContext",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "slot",
                    "type": "bytes32"
                }
            ],
            "name": "UUPSUnsupportedProxiableUUID",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint64",
                    "name": "version",
                    "type": "uint64"
                }
            ],
            "name": "Initialized",
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
            "name": "OwnershipTransferStarted",
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
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "bidId",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "uint64",
                            "name": "srcChainId",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint256",
                            "name": "srcAddress",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "srcToken",
                            "type": "string"
                        },
                        {
                            "internalType": "uint64",
                            "name": "dstChainId",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint256",
                            "name": "dstAddress",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "dstToken",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "srcAmount",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "dstAmount",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "dstNativeAmount",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "requestor",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "lpId",
                            "type": "string"
                        },
                        {
                            "internalType": "uint64",
                            "name": "stepTimeLock",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "agreementReachedTime",
                            "type": "uint64"
                        },
                        {
                            "internalType": "string",
                            "name": "userSign",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "lpSign",
                            "type": "string"
                        }
                    ],
                    "indexed": false,
                    "internalType": "struct SignatureHelper.Complaint",
                    "name": "complaint",
                    "type": "tuple"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "complainant",
                    "type": "string"
                }
            ],
            "name": "SubmitComplaint",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "implementation",
                    "type": "address"
                }
            ],
            "name": "Upgraded",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "DOMAIN_SEPARATOR",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "UPGRADE_INTERFACE_VERSION",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "acceptOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint64",
                            "name": "srcChainId",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint256",
                            "name": "srcAddress",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "srcToken",
                            "type": "string"
                        },
                        {
                            "internalType": "uint64",
                            "name": "dstChainId",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint256",
                            "name": "dstAddress",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "dstToken",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "srcAmount",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "dstAmount",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "dstNativeAmount",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "requestor",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "lpId",
                            "type": "string"
                        },
                        {
                            "internalType": "uint64",
                            "name": "stepTimeLock",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "agreementReachedTime",
                            "type": "uint64"
                        },
                        {
                            "internalType": "string",
                            "name": "userSign",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "lpSign",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct SignatureHelper.Complaint",
                    "name": "_complaint",
                    "type": "tuple"
                }
            ],
            "name": "getBidId",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_bidId",
                    "type": "bytes32"
                }
            ],
            "name": "hasComplaint",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_terminusDID",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "_tagTypeDomain",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_tagName",
                    "type": "string"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
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
            "inputs": [],
            "name": "pendingOwner",
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
            "name": "proxiableUUID",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
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
                    "components": [
                        {
                            "internalType": "uint64",
                            "name": "srcChainId",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint256",
                            "name": "srcAddress",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "srcToken",
                            "type": "string"
                        },
                        {
                            "internalType": "uint64",
                            "name": "dstChainId",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint256",
                            "name": "dstAddress",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "dstToken",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "srcAmount",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "dstAmount",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "dstNativeAmount",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "requestor",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "lpId",
                            "type": "string"
                        },
                        {
                            "internalType": "uint64",
                            "name": "stepTimeLock",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "agreementReachedTime",
                            "type": "uint64"
                        },
                        {
                            "internalType": "string",
                            "name": "userSign",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "lpSign",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct SignatureHelper.Complaint",
                    "name": "_complaint",
                    "type": "tuple"
                },
                {
                    "internalType": "bytes",
                    "name": "_sig",
                    "type": "bytes"
                },
                {
                    "internalType": "string",
                    "name": "_domain",
                    "type": "string"
                }
            ],
            "name": "submitComplaint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "tagName",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "tagTypeDomain",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "terminusDID",
            "outputs": [
                {
                    "internalType": "contract ITerminusDID",
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
                    "name": "newOwner",
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
                    "internalType": "address",
                    "name": "newImplementation",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "upgradeToAndCall",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        }
    ]
}