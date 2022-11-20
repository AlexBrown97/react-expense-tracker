import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  /*This shows how you can store HTML elements inside variables. Here we are assigning a p tag element first, then checking
  if filteredExpenses has items and re-assigning the variable to be our ExpenseItem list if it does. This means our returned
  JSX block is a lot cleaner
  */
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          // this key is to help React identify the individual items in the array, beacuse to React they all look the same
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
