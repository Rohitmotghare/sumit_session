import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import React from 'react';

function Expenses(props){
    return(
        <Card className="expenses">
            <h2>Let's get Started!</h2>

            {
                props.item.map(
                    expense=>(
                        <ExpenseItem 
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount}/>
                    )
                )
            } 

                {/* <ExpenseItem 
            date={props.item[1].date}
            title={props.item[1].title}
            amount={props.item[1].amount}
            />
                <ExpenseItem 
            date={props.item[2].date}
            title={props.item[2].title}
            amount={props.item[2].amount}
            />
                <ExpenseItem 
            date={props.item[3].date}
            title={props.item[3].title}
            amount={props.item[3].amount}
            /> */}
        
        </Card>
    )
}

export default Expenses;