import { createContext, useState, useContext } from "react";
import Web3 from "web3";
import { provider } from "web3-core";
import { Contract } from "web3-eth-contract";
import { createLotteryContract } from "../utils/lotteryContract";

export interface Context {
  connectWallet: () => void;
  enterLottery: () => void;
  address: string;
}

export const AppContext = createContext<Context | null>(null);

export const AppProvider = ({ children }) => {
  const [address, setAddress] = useState<string>("");
  const [web3, setWeb3] = useState<Web3>(null);
  const [lotteryContract, setLotteryContract] = useState<Contract>(null);
  const [lotteryPot, setLotteryPot] = useState<number>(0);
  const [lotteryPlayers, setLotteryPlayers] = useState<string[]>([]);
  const [lastWinner, setLastWinner] = useState<string>("");

  const enterLottery = async () => {
    try {
      await lotteryContract.methods.enter().send({
        from: address,
        value: Web3.utils.toWei("0.01", "ether"),
        gas: 3000000,
        gasPrice: null
      });
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        setWeb3(web3);

        const accounts = await web3.eth.getAccounts();
        setAddress(accounts[0]);
        const lotteryContract = createLotteryContract(web3);
        setLotteryContract(lotteryContract);

        window.ethereum.on("accountsChanged", async () => {
          const accounts = await web3.eth.getAccounts();
          setAddress(accounts[0]);
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <AppContext.Provider value={{ connectWallet, enterLottery, address }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);