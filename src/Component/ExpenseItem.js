import './ExpenseItem.css'

const ExpenseItems = () => {
    const ExpenseDate = new Date('11/10/1984');
    const Expense = 'Car Service';
    const ExpenseAmount = 200;
    
  return (
    <div className = 'expense-item'>
      <div>{ExpenseDate.toISOString()}</div>
      <div>
        <h2>{Expense}</h2>
        <div className ="expense-item__price">${ExpenseAmount}</div>
      </div>
    </div>
  );
};
export default ExpenseItems;
