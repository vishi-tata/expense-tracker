import { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const [expenseToBeEdited, setExpenseToBeEdited] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  const editHandler = (expenseToBeEdited) => {
    setExpenseToBeEdited(expenseToBeEdited);
  };

  console.log(expenseToBeEdited);

  const editExpenseHandler = (editedExpense) => {
    setExpenses((prevExpenses) => {
      for (const prevExpense of prevExpenses) {
        if (prevExpense.id === expenseToBeEdited.id) {
          prevExpense.title = editedExpense.title;
          prevExpense.amount = editedExpense.amount;
          prevExpense.date = editedExpense.date;
        }
      }
      return prevExpenses;
    })
  };



  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} expenseToBeEdited={expenseToBeEdited} onEditExpense={editExpenseHandler} />
      <Expenses expenses={expenses} onEdit={editHandler} />
    </div>
  );
}

export default App;
