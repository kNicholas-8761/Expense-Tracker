import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'

const NewExpenses = ({onAddExpenseData }) => {

    const saveExpenseData = (enteredExpense)=>{
        const expenseData= {
            ...enteredExpense,
           id:  Math.random().toString()
        }
        onAddExpenseData(expenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData = {saveExpenseData}/>
        </div>
    )
}

export default NewExpenses
            
