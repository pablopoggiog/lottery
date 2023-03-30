import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback
} from "react";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import toast from "react-hot-toast";
import { createLotteryContract } from "../utils/lotteryContract";

export interface Context {
  connectWallet: () => void;
  enterLottery: () => void;
  pickWinner: () => void;
  withdrawPot: () => void;
  address: string;
  lotteryPot: string;
  lotteryPlayers: string[];
  lastWinner: string;
  lotteryId: number;
}

export const AppContext = createContext<Context | null>(null);

export const AppProvider = ({ children }) => {
  const [address, setAddress] = useState<string>("");
  const [lotteryContract, setLotteryContract] = useState<Contract>(null);
  const [lotteryPot, setLotteryPot] = useState<string>("");
  const [lotteryPlayers, setLotteryPlayers] = useState<string[]>([]);
  const [lastWinner, setLastWinner] = useState<string>("");
  const [lotteryId, setLotteryId] = useState<number>();

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        fetchConnectedWallet();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const fetchConnectedWallet = useCallback(async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);

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
  }, []);

  const updateLottery = useCallback(async () => {
    if (lotteryContract) {
      try {
        const potInWEI = await lotteryContract.methods.getBalance().call();
        const potInETH = Web3.utils.fromWei(potInWEI, "ether");
        setLotteryPot(potInETH);

        const players: string[] = await lotteryContract.methods
          .getPlayers()
          .call();
        setLotteryPlayers(players);

        const winners: string[] = await lotteryContract.methods
          .getWinners()
          .call();
        console.log("winners: ", winners);
        const lastWinner = winners[winners.length - 1];
        setLastWinner(lastWinner);

        const lotteryId: number = await lotteryContract.methods
          .getLotteryId()
          .call();
        setLotteryId(lotteryId);
      } catch (error) {
        console.error(error);
        toast.error(
          "Oops, something went wrong trying to update the lottery data. Please try again."
        );
      }
    }
  }, [lotteryContract]);

  const enterLottery = async () => {
    try {
      await lotteryContract.methods.enter().send({
        from: address,
        value: Web3.utils.toWei("0.01", "ether"),
        gas: 3000000,
        gasPrice: null
      });
      console.log("Entered lottery");
      updateLottery();
    } catch (error) {
      console.error(error.message);
      const signerRejectedSignature = String(error.message).includes(
        "MetaMask Tx Signature: "
      );
      const errorMessage = signerRejectedSignature
        ? "You rejected the transaction"
        : "Oops, something went wrong.";
      toast.error(errorMessage);
    }
  };

  const pickWinner = async () => {
    try {
      await lotteryContract.methods.startPickingWinner().send({
        from: address,
        gas: 3000000,
        gasPrice: null
      });
      console.log("Started the process to pick a winner");

      const pollWinner = () => {
        const interval = setInterval(async () => {
          const events = await lotteryContract.getPastEvents("WinnerPicked", {
            fromBlock: "latest",
            toBlock: "latest"
          });
          if (events.length > 0) {
            updateLottery();
            clearInterval(interval);
          }
        }, 1000);
      };

      pollWinner();
    } catch (error) {
      console.error(error);
      const signerRejectedSignature = String(error.message).includes(
        "MetaMask Tx Signature: "
      );
      const errorMessage = signerRejectedSignature
        ? "You rejected the transaction"
        : "Oops, something went wrong. Make sure you're the lottery owner and try again.";
      toast.error(errorMessage);
    }
  };

  const withdrawPot = async () => {
    try {
      await lotteryContract.methods.withdrawPot().send({
        from: address,
        gas: 3000000,
        gasPrice: null
      });
      console.log("withdrew pot");
      updateLottery();
    } catch (error) {
      console.error(error);
      const signerRejectedSignature = String(error.message).includes(
        "MetaMask Tx Signature: "
      );
      const errorMessage = signerRejectedSignature
        ? "You rejected the transaction"
        : "Oops, something went wrong.";
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    updateLottery();
  }, [updateLottery]);

  useEffect(() => {
    fetchConnectedWallet();
  }, [fetchConnectedWallet]);

  return (
    <AppContext.Provider
      value={{
        connectWallet,
        enterLottery,
        pickWinner,
        withdrawPot,
        address,
        lotteryPot,
        lotteryPlayers,
        lastWinner,
        lotteryId
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
