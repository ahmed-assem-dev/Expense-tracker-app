import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3 className="text-lg text-left border border-b-gray-900">History</h3>
      <ul className="flex flex-col  w-[100%]       ">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
