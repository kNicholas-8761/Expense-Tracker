import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItems = (props) => {

  let title = props.title;

  const ClickHandler =() =>{
   title = 'Updated';
   console.log(title);
  }

  return (
    <Card className = 'expense-item'>
      <ExpenseDate 
        date = {props.date}
        />
      <div>
        <h2>{title}</h2>
        <div className ="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={ClickHandler}>Click me!!</button>
    </Card>
  );
};
export default ExpenseItems;
    

    
