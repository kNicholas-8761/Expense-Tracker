import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterchangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense = items.filter(year => year.date.getFullYear().toString() === filteredYear)
console.log(typeof(filteredExpense));

let expenseContent = <p>No expenses to display</p>

  if(filteredExpense.length > 0){
    expenseContent = 
    filteredExpense.map(expense => (
      <ExpenseItem
        key= {expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSaveFilterYear={filterchangeHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
        
