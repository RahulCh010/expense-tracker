import React from "react";
import { useState } from "react/cjs/react.development";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const [viewForm, setViewForm] = useState(false);
	const onSaveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
		viewFormHandler();
	};

	const viewFormHandler = () => {
		setViewForm((prevState) => {
			return !prevState;
		});
	};

	return (
		<div className="new-expense">
			{!viewForm && <button onClick={viewFormHandler}>Add New Expense</button>}
			{viewForm && (
				<ExpenseForm
					onCancel={viewFormHandler}
					onSaveExpenseData={onSaveExpenseDataHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
