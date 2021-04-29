import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import { useState } from 'react'

import './Expenses.css'

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2021')

    const filterExpensesHandler = year => {
        setSelectedYear(year)
    }

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
      });  

    return (
        <Card className="expenses">
            <ExpenseFilter selected={selectedYear} onSelectedFilterYear={filterExpensesHandler}></ExpenseFilter>
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            <ExpensesList filteredExpenses={filteredExpenses} ></ExpensesList>
        </Card>
    )
}

export default Expenses