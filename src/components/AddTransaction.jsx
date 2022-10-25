import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };
  return (
    <>
      <h3 className="text-lg text-left my-5 border border-b-gray-900">
        Add new transaction
      </h3>
      <form onSubmit={onSubmit}>
        <div className="w-full flex flex-col mb-2">
          <label htmlFor="text" className="font-mono text-left ">
            Text
          </label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter text..."
            className="font-mono text-left p-1"
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="amount">
            <p className="font-mono text-left">Amount</p>
            <p className="font-mono text-[12px] p-1">
              (negative - expense, positive - income)
            </p>
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="Enter amount..."
            className="font-mono text-left p-1"
          />
        </div>
        <button className="p-2 my-2 border border-purple-900 bg-purple-400 ease-in duration-300 hover:bg-purple-300 hover:border-inherit w-full">
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
