import style from "../styles/Header.module.css";
import { useAppContext } from "../context/context";
import ConnectWalletBtn from "./ConnectWalletBtn";
import UserCard from "./UserCard";

const Header = () => {
  const { address, connectWallet } = useAppContext();

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Lottery DAPP 💰</div>
      {/* TODO: Conditionally render connect button if no user is logged in. */}
      {/* TODO: pass in the address to the userCard */}
      {/* TODO: pass in the connect Wallet function to the connect Wallet Button. */}

      {address ? (
        <UserCard address={address} />
      ) : (
        <ConnectWalletBtn connectWallet={connectWallet} />
      )}
    </div>
  );
};
export default Header;
