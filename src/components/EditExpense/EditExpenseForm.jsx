import { useState } from "react";

import "./../NewExpense/ExpenseForm.css";
import "./../NewExpense/NewExpense.css";

const EditExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(
    props.expenseToBeEdited.title
  );
  const [enteredAmount, setEnteredAmount] = useState(
    props.expenseToBeEdited.amount
  );
  const [enteredDate, setEnteredDate] = useState(props.expenseToBeEdited.date);

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      id: props.expenseToBeEdited.id,
    };

    console.log(expenseData);

    props.onSaveEditExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={props.onEditCancel} type="button">
            Cancel
          </button>
          <button type="submit">Edit Expense</button>
        </div>
      </form>
    </div>
  );
};

export default EditExpenseForm;
