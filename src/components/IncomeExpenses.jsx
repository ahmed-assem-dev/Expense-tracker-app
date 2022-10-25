import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div className="flex flex-row justify-center bg-white w-fit mx-auto  my-2 shadow-lg ">
      <div className="p-2 w-[150px] border border-gray-100">
        <h4 className="font-mono">INCOME</h4>
        <p className="text-green-500 text-lg  font-mono"> ${income}</p>
      </div>
      <div className="p-2 w-[150px] border border-gray-100">
        <h4 className="font-mono">EXPENSE</h4>
        <p className="text-red-500 text-lg font-mono"> ${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
