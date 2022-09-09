import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const editHandler = (id) => {
    props.onEdit(id);
  };
  const deleteHandler = (id) => {
    props.onDelete(id);
  };
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses found!</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          onEdit={editHandler}
          onDelete={deleteHandler}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
