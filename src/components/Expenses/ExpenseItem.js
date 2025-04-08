import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card';
import React from 'react';

function ExpenseItem(props){

    const sampleDate = props.date;
  
    return (
        <Card className="expense-item">
            <ExpenseDate date={sampleDate} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            
        </Card>
    );
}

export default ExpenseItem;