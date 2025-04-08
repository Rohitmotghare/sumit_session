import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
import React from 'react';



const NewExpense = (props) =>{

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData ={
            ...enteredExpenseData,
            id: 23
        }

        props.onAddExpenses(expenseData);

        console.log(expenseData)
    }


    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;