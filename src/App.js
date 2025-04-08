 
import Expenses from "./components/Expenses/Expenses";
import React, { useState } from 'react';
import NewExpense from "./components/NewExpense/NewExpense";


let DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Grocery Amount',
        amount: 5454,
        date: new Date(2024, 5, 6)
    },
    {
        id: 'e2',
        title: 'School Fees',
        amount: 786,
        date: new Date(2023, 6, 23)
    },
    {
        id: 'e3',
        title: 'Bike Expense',
        amount: 5555,
        date: new Date(2024, 5, 25)
    },
    {
        id: 'e4',
        title: 'Food Expense',
        amount: 1234,
        date: new Date(2022, 11, 2)
    }

];

function App(){ 

   const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

   const addExpenseHandler = (expense) =>{
        const updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense)
   }
 

    return (
        <div>
            <NewExpense onAddExpenses={addExpenseHandler} />
            <Expenses item={expenses} />
        </div>
    );
} 

export default App;
