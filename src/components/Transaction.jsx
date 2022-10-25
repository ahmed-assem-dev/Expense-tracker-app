import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction, onBtnClick }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount > 0 ? "+" : "-";
  const item = `w-full flex my-2 bg-white border-white group border-4 ${
    sign === "-" ? "border-l-red-500" : "border-l-green-500"
  }`;

  return (
    <>
      <li className={item}>
        <p className="flex justify-between w-[90%] p-1">
          {transaction.text}{" "}
          <span className="">
            {sign}${Math.abs(transaction.amount)}
          </span>
        </p>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="hidden   group-hover:inline p-1   bg-red-500 w-[10%]"
        >
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;
