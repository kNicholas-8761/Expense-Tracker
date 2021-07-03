import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItems = (props) => {
  const [title , setTitle] = useState(props.title)

  const ClickHandler =() =>{
    setTitle('Updated')
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
    

    
