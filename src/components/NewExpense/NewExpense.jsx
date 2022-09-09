import { useState } from "react";
import EditExpenseForm from "../EditExpense/EditExpenseForm";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setIsAdding(false);
  };

  const saveEditExpenseDataHandler = (enteredEditedExpenseData) => {
    props.onEditExpense(enteredEditedExpenseData);
    setIsEditing(false);
  };

  const startAddingHandler = () => {
    setIsAdding(true);
  };

  const stopAddingHandler = () => {
    setIsAdding(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  if (props.expenseToBeEdited) {
    props.onEditClick(setIsEditing);
  }

  return (
    <div className="new-expense">
      {!isAdding && !isEditing && (
        <button onClick={startAddingHandler}>Add New Expense</button>
      )}
      {isAdding && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopAddingHandler}
        />
      )}
      {isEditing && (
        <EditExpenseForm
          onSaveEditExpenseData={saveEditExpenseDataHandler}
          onCancel={stopEditingHandler}
          expense={props.expenseToBeEdited}
        />
      )}
    </div>
  );
};

export default NewExpense;
