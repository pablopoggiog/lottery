/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Lottery, LotteryInterface } from "../Lottery";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "enter",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLotteryId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPlayers",
    outputs: [
      {
        internalType: "address payable[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRandomNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWinners",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lotteryId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pickWinner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "players",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "winners",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600381905550610d53806100686000396000f3fe60806040526004361061009c5760003560e01c8063a2fb117511610064578063a2fb117514610164578063dbdff2c1146101a1578063df15c37e146101cc578063e580f47b146101f7578063e97dcb6214610222578063f71d96cb1461022c5761009c565b806312065fe0146100a15780635d495aea146100cc5780638b5b9ccc146100e35780638da5cb5b1461010e578063900aafaf14610139575b600080fd5b3480156100ad57600080fd5b506100b6610269565b6040516100c391906107df565b60405180910390f35b3480156100d857600080fd5b506100e1610271565b005b3480156100ef57600080fd5b506100f8610484565b60405161010591906108ea565b60405180910390f35b34801561011a57600080fd5b50610123610512565b604051610130919061092d565b60405180910390f35b34801561014557600080fd5b5061014e610536565b60405161015b91906107df565b60405180910390f35b34801561017057600080fd5b5061018b60048036038101906101869190610979565b610540565b604051610198919061092d565b60405180910390f35b3480156101ad57600080fd5b506101b661057f565b6040516101c391906107df565b60405180910390f35b3480156101d857600080fd5b506101e16105d3565b6040516101ee9190610a64565b60405180910390f35b34801561020357600080fd5b5061020c610661565b60405161021991906107df565b60405180910390f35b61022a610667565b005b34801561023857600080fd5b50610253600480360381019061024e9190610979565b6106e0565b6040516102609190610a95565b60405180910390f35b600047905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f690610b33565b60405180910390fd5b600060018054905061030f61057f565b6103199190610b82565b905060006001828154811061033157610330610bb3565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156103a4573d6000803e3d6000fd5b506002819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506003600081548092919061041b90610c11565b9190505550600067ffffffffffffffff81111561043b5761043a610c59565b5b6040519080825280602002602001820160405280156104695781602001602082028036833780820191505090505b506001908051906020019061047f92919061071f565b505050565b6060600180548060200260200160405190810160405280929190818152602001828054801561050857602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116104be575b5050505050905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600354905090565b6002818154811061055057600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16426040516020016105b5929190610cf1565b6040516020818303038152906040528051906020012060001c905090565b6060600280548060200260200160405190810160405280929190818152602001828054801561065757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161060d575b5050505050905090565b60035481565b662386f26fc1000034101561067b57600080fd5b6001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600181815481106106f057600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b828054828255906000526020600020908101928215610798579160200282015b828111156107975782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019061073f565b5b5090506107a591906107a9565b5090565b5b808211156107c25760008160009055506001016107aa565b5090565b6000819050919050565b6107d9816107c6565b82525050565b60006020820190506107f460008301846107d0565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061085182610826565b9050919050565b61086181610846565b82525050565b60006108738383610858565b60208301905092915050565b6000602082019050919050565b6000610897826107fa565b6108a18185610805565b93506108ac83610816565b8060005b838110156108dd5781516108c48882610867565b97506108cf8361087f565b9250506001810190506108b0565b5085935050505092915050565b60006020820190508181036000830152610904818461088c565b905092915050565b600061091782610826565b9050919050565b6109278161090c565b82525050565b6000602082019050610942600083018461091e565b92915050565b600080fd5b610956816107c6565b811461096157600080fd5b50565b6000813590506109738161094d565b92915050565b60006020828403121561098f5761098e610948565b5b600061099d84828501610964565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6109db8161090c565b82525050565b60006109ed83836109d2565b60208301905092915050565b6000602082019050919050565b6000610a11826109a6565b610a1b81856109b1565b9350610a26836109c2565b8060005b83811015610a57578151610a3e88826109e1565b9750610a49836109f9565b925050600181019050610a2a565b5085935050505092915050565b60006020820190508181036000830152610a7e8184610a06565b905092915050565b610a8f81610846565b82525050565b6000602082019050610aaa6000830184610a86565b92915050565b600082825260208201905092915050565b7f4f6e6c79206f776e65722063616e2074726967676572207069636b696e67206160008201527f2077696e6e657200000000000000000000000000000000000000000000000000602082015250565b6000610b1d602783610ab0565b9150610b2882610ac1565b604082019050919050565b60006020820190508181036000830152610b4c81610b10565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610b8d826107c6565b9150610b98836107c6565b925082610ba857610ba7610b53565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610c1c826107c6565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610c4e57610c4d610be2565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008160601b9050919050565b6000610ca082610c88565b9050919050565b6000610cb282610c95565b9050919050565b610cca610cc58261090c565b610ca7565b82525050565b6000819050919050565b610ceb610ce6826107c6565b610cd0565b82525050565b6000610cfd8285610cb9565b601482019150610d0d8284610cda565b602082019150819050939250505056fea264697066735822122018113cc5fa7b805df895a26517b401f9f9ddcc8c929635d42f78bbb9d893c73b64736f6c63430008120033";

type LotteryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LotteryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Lottery__factory extends ContractFactory {
  constructor(...args: LotteryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Lottery> {
    return super.deploy(overrides || {}) as Promise<Lottery>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Lottery {
    return super.attach(address) as Lottery;
  }
  override connect(signer: Signer): Lottery__factory {
    return super.connect(signer) as Lottery__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LotteryInterface {
    return new utils.Interface(_abi) as LotteryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Lottery {
    return new Contract(address, _abi, signerOrProvider) as Lottery;
  }
}
