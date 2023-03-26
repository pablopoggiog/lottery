import { useAutoAnimate } from "@formkit/auto-animate/react";
import truncateEthAddress from "truncate-eth-address";
import style from "../styles/PotCard.module.css";
import { useAppContext } from "../context/context";

const LotteryCard = () => {
  const {
    enterLottery,
    pickWinner,
    withdrawPot,
    lotteryPot,
    lastWinner,
    lotteryId
  } = useAppContext();

  const [parent] = useAutoAnimate();

  return (
    <div className={style.wrapper} ref={parent}>
      <div className={style.title}>
        Lottery <span className={style.textAccent}>#{lotteryId}</span>
      </div>
      <div className={style.pot}>
        Pot 🍯: <span className={style.potAmount}>{lotteryPot} ETH</span>
      </div>

      <div className={style.recentWinnerTitle}>Last Winner</div>

      <div className={style.winner}>
        {lastWinner ? truncateEthAddress(lastWinner) : "No winner yet"}
      </div>

      <div className={style.btn} onClick={enterLottery}>
        Enter
      </div>
      <div className={style.btn} onClick={pickWinner}>
        Pick Winner!
      </div>
      <div className={style.btn} onClick={withdrawPot}>
        Withdraw Pot
      </div>
    </div>
  );
};

export default LotteryCard;
