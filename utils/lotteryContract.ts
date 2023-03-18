import { CONTRACT_ADDRESS, CONTRACT_ABI } from "./constants";

import Web3 from "web3";
import { AbiItem } from "web3-utils";

Web3.providers.HttpProvider;

export const createLotteryContract = (web3: Web3) =>
  new web3.eth.Contract(CONTRACT_ABI as AbiItem[], CONTRACT_ADDRESS);
