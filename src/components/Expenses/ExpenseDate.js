import './ExpenseDate.css'
import React from 'react';



function ExpenseDate(props){

    // if (!(props.date instanceof Date)) {
    //     console.log("Invalid date prop passed to ExpenseDate component");
    //     return null; // Or you can return a placeholder UI here
    //   }
 
    const date2 = new Date(props.date);

    const month = date2.getMonth();
    const year = date2.getFullYear();
    const day = date2.getDay();

    return(
        <div className="date">
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
        </div>
    )
}

export default ExpenseDate;