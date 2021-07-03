import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItems = (props) => {


  return (
    <div className = 'expense-item'>
      <ExpenseDate 
        date = {props.date}/>
      <div>
        <h2>{props.title}</h2>
        <div className ="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};
export default ExpenseItems;
    
    
