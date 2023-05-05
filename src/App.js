import React , {useState} from "react";
import Expenses from "./components/ExpensesFolder/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
let DUMMY_EXPENSE = [
  // {
  //   id: "e1",
  //   title: "School Fee",
  //   amount: "600",
  //   date: new Date(2022, 9, 22),
  // },
  // {
  //   id: "e2",
  //   title: "Car Insurence",
  //   amount: "200",
  //   date: new Date(2022, 9, 22),
  // },
  // {
  //   id: "e3",
  //   title: "Restaurent",
  //   amount: "400",
  //   date: new Date(2022, 4, 30),
  // },
  // {
  //   id: "e4",
  //   title: "Grocery",
  //   amount: "700",
  //   date: new Date(2022, 8, 2),
  // },
];

const App = () => {
  
  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses]
    setExpense(updatedExpense)
  }

  const [expenses, setExpense] = useState(DUMMY_EXPENSE);
  console.log(expenses)
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
