import style from "../styles/Header.module.css";

const ConnectWalletBtn = ({ connectWallet }) => (
  <button className={style.loginBtn} onClick={connectWallet}>
    Connect Wallet
  </button>
);

export default ConnectWalletBtn;
