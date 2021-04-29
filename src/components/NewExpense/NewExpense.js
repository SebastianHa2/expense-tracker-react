import './NewExpense.css'

import ExpenseForm from './ExpenseForm'
import { useState } from 'react'


function NewExpense(props) {
    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onPassNewExpenseData(expenseData)
    }

    const hideExpenseFormHandler = () => {
        setShowNewExpenseForm(false)
    }

    const [showNewExpenseForm, setShowNewExpenseForm] = useState(false)

    const showExpenseForm = () => {
        setShowNewExpenseForm(true)
    }

    return (
        <div className="new-expense">
            {showNewExpenseForm && <ExpenseForm onCancel={hideExpenseFormHandler} onSaveExpenseData={saveExpenseDataHandler} ></ExpenseForm>}
            {!showNewExpenseForm && <button onClick={showExpenseForm}>Add New Expense</button>}
        </div>
    )
}

export default NewExpense