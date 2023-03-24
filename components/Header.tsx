import style from "../styles/Header.module.css";
import { useAppContext } from "../context/context";
import ConnectWalletBtn from "./ConnectWalletBtn";
import UserCard from "./UserCard";

const Header = () => {
  const { address, connectWallet } = useAppContext();

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Smart Lottery</div>

      {address ? (
        <UserCard address={address} />
      ) : (
        <ConnectWalletBtn connectWallet={connectWallet} />
      )}
    </div>
  );
};

export default Header;
