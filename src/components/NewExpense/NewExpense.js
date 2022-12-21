import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formShowing, setForm] = useState(false);
  const showFormHandler = () => {
    setForm(true);
  };
  const hideFormHandler = () => {
    setForm(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const idNumber = Math.round(Math.random() * 1000000).toString();
    const expenseData = {
      ...enteredExpenseData,
      id: idNumber,
    };
    props.onAddExpense(expenseData);
    hideFormHandler();
  };

  return (
    <div className="new-expense">
      {!formShowing && (
        <button onClick={showFormHandler}>Add a new expense</button>
      )}
      {formShowing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          hideForm={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
