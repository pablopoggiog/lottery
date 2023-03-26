import truncateEthAddress from "truncate-eth-address";
import style from "../styles/Header.module.css";

const UserCard = ({ address }) => (
  <div>
    <div className={`${style.welcome} ${style.loginBtn}`}>
      👋🏻 Welcome,{" "}
      <span className={style.accentColor}>{truncateEthAddress(address)}</span>
    </div>
  </div>
);

export default UserCard;
