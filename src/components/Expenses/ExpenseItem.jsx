import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const editHandler = (event) => {
    props.onEdit(event.target.id);
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">₹{props.amount}</div>
        </div>
        <button type="button" id={props.id} onClick={editHandler}>
          Edit
        </button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
