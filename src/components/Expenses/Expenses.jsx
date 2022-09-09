import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFitler from "./ExpensesFilter";
import ExpenseChart from "./ExpensesChart";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesFitler
        onChangeFilter={filterChangeHandler}
        filteredYear={filteredYear}
      />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
