import { useAutoAnimate } from "@formkit/auto-animate/react";
import truncateEthAddress from "truncate-eth-address";
import style from "../styles/PotCard.module.css";
import { useAppContext } from "../context/context";

const LotteryCard = () => {
  const { enterLottery, pickWinner, lotteryPot, lastWinner } = useAppContext();

  const [parent] = useAutoAnimate();

  return (
    <div className={style.wrapper} ref={parent}>
      <div className={style.title}>
        {/* TODO: Dynamically render the lotteryID */}
        Lottery <span className={style.textAccent}>#1</span>
      </div>
      <div className={style.pot}>
        Pot 🍯: <span className={style.goldAccent}>{lotteryPot} ETH</span>
      </div>

      <div className={style.recentWinnerTitle}>🏆Last Winner🏆</div>
      <div className={style.winner}>{truncateEthAddress(lastWinner)}</div>

      <div className={style.btn} onClick={enterLottery}>
        Enter
      </div>
      <div className={style.btn} onClick={pickWinner}>
        Pick Winner!
      </div>
    </div>
  );
};

export default LotteryCard;
