import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFitler from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  return (
    <div>
      <ExpensesFitler />
      <Card className="expenses">
        <ExpenseItem
          date={props.expenses[0].date}
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
        />
        <ExpenseItem
          date={props.expenses[1].date}
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
        />
        <ExpenseItem
          date={props.expenses[2].date}
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
        />
        <ExpenseItem
          date={props.expenses[3].date}
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
        />
      </Card>
    </div>
  );
};

export default Expenses;
