 import './ExpenseForm.css'
import React, {useState} from 'react';

const ExpenseForm = (props) =>{

    const [enteredTitle, setenteredTitle] = useState("");
    const [enteredAmount, setenteredAmount] = useState("");
    const [enteredDate, setenteredDate] = useState("");


    const titleChangeHandler = (event) =>{
        setenteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) =>{
        setenteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) =>{
        setenteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate
        }

        props.onSaveExpenseData(expenseData);


        console.log(expenseData)

        setenteredTitle("");
        setenteredAmount("");
        setenteredDate("");
    }


    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense_controls'>
                <div className='new-expense_control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense_control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense_control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className='new-expense_actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;