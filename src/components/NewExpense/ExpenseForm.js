import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  let [enteredTitle, setEnteredTitle] = useState("");
  let [enteredAmount, setEnteredAmount] = useState("");
  let [enteredDate, setEnteredDate] = useState("");

  const titleChandHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChandHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChandHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    let expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChandHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChandHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChandHandler} />
        </div>
      </div>
      <div className="new-expense__actions ">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
