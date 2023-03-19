import { useAppContext } from "../context/context";
import style from "../styles/Table.module.css";
import TableRow from "./TableRow";

const Table = () => {
  const { lotteryPlayers } = useAppContext();

  return (
    <div className={style.wrapper}>
      <div className={style.tableHeader}>
        <div className={style.addressTitle}>💳 User Address</div>
        <div className={style.amountTitle}>💲 Amount</div>
      </div>
      <div className={style.rows}>
        {lotteryPlayers.map((player, index) => (
          <TableRow key={index} player={player} />
        ))}
      </div>
    </div>
  );
};
export default Table;
