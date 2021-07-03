import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItems = (props) => {

  return (
    <Card className = 'expense-item'>
      <ExpenseDate 
        date = {props.date}
        />
      <div>
        <h2>{props.title}</h2>
        <div className ="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};
export default ExpenseItems;
    

    
