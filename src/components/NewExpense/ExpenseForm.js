import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  // All these three states are related to the form. It is the same concept repeated three times
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Instead, you can go for one state instead of 3. You do this by passing in UseState only once and passing in an object as a value
  // In this object, you can group together your states
  // The difference now is that whenever you update the state, you need to update all 3 properties
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // Now in the handlers, you want to pass in a new object where you set the entered value to event.target.value BUT you also need to ensure the other properties are not getting lost
  // You can do this by using the spread operator to copy over the other values into your object and then you're just overriding 'enteredTitle'
  // However! There is a problem - here, we are depending on our previous state for updating the state.
  // const titleChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredTitle: event.target.value,
  //   });
  // };

  // RULE: Whenever you update state and it depends on the previous state, instead of calling it like you have above, you should pass in a function to the setUserInput
  // This function will recieve the previous state snapshot. You should then return the new state snapshot by spreading the previous state key value pairs and overring the specific prop

  // const titleChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredTitle: event.target.value };
  //   });
  // };
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  // const amountChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredAmount: event.target.value };
  //   });
  // };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  // const dateChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredDate: event.target.value };
  //   });
  // };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={enteredTitle}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
