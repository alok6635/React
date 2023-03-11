import ExpenseItem from './Components/ExpenseItem'

function App() {
const expenseDate = new Date(2021,3,28);
 const expenseTitle = "School fees";
 const expenseAmount = "$300";

  return (
    <div className="App">
   <ExpenseItem 
   date={expenseDate} 
   title={expenseTitle} 
   amount={expenseAmount}>
    </ExpenseItem>
   <ExpenseItem 
   date={expenseDate} 
   title={expenseTitle} 
   amount={expenseAmount}>
    </ExpenseItem>
   <ExpenseItem 
   date={expenseDate} 
   title={expenseTitle} 
   amount={expenseAmount}>
    </ExpenseItem>
   <ExpenseItem 
   date={expenseDate} 
   title={expenseTitle} 
   amount={expenseAmount}>
    </ExpenseItem>
    </div>
  );
}

export default App;
