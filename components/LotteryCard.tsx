import { useAutoAnimate } from "@formkit/auto-animate/react";
import truncateEthAddress from "truncate-eth-address";
import style from "../styles/PotCard.module.css";
import { useAppContext } from "../context/context";

const LotteryCard = () => {
  const { address, enterLottery, lotteryPot } = useAppContext();

  const [parent] = useAutoAnimate();

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        {/* TODO: Dynamically render the lotteryID */}
        Lottery <span className={style.textAccent}>#1</span>
      </div>
      <div className={style.pot} ref={parent}>
        Pot 🍯: <span className={style.goldAccent}>{lotteryPot} ETH</span>
      </div>

      <div className={style.recentWinnerTitle}>🏆Last Winners🏆</div>
      <div className={style.winner}>{truncateEthAddress(address)}</div>

      <div className={style.btn} onClick={enterLottery}>
        Enter
      </div>
      <div className={style.btn}>Pick Winner!</div>
    </div>
  );
};

export default LotteryCard;
