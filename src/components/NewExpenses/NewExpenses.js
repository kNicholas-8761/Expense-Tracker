import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'

const NewExpenses = ({onAddExpenseData }) => {
    const [isEditing, setIsEditing] = useState(true)
    

    const saveExpenseData = (enteredExpense)=>{
        const expenseData= {
            ...enteredExpense,
           id:  Math.random().toString()
        }
        onAddExpenseData(expenseData)
        setIsEditing(false)
    }
    const startEditingHandler= () => {
        setIsEditing(true)
    }
    const stopIsEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button type="button" onClick={startEditingHandler}>Add New Expense</button> }
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseData} onCancel={stopIsEditingHandler}/>}
        </div>
    )
}

export default NewExpenses
            
