import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2021");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((item) => {
		return item.date.getFullYear() === parseInt(filteredYear);
	});

	return (
		<Card className="expenses">
			<ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
};

export default Expenses;
