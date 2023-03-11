import ExpenseItem from './Components/ExpenseItem'

function App() {

const expense =[
{
  id:"e1",
  title:"Office",
  amount:250,
  date: new Date(2022, 5,1),
},
{
  id:"e2",
  title:" Hostel ",
  amount:350,
  date: new Date(2022, 5,2),
},
{
  id:"e3",
  title:"Home",
  amount:550,
  date: new Date(2022, 5,3),
},
{
  id:"e4",
  title:"College",
  amount:750,
  date: new Date(2022, 5,4),
}
]  

return (
    <div className="App">
   <ExpenseItem 
   date={expense[0].date} 
   title={expense[0].title} 
   amount={expense[0].amount}>
    </ExpenseItem>

   <ExpenseItem 
   date={expense[1].date} 
   title={expense[1].title} 
   amount={expense[1].amount}>
    </ExpenseItem>

   <ExpenseItem 
   date={expense[2].date} 
   title={expense[2].title} 
   amount={expense[2].amount}>
    </ExpenseItem>

   <ExpenseItem 
   date={expense[3].date} 
   title={expense[3].title} 
   amount={expense[3].amount}>
    </ExpenseItem>
   
    </div>
  );
}

export default App;
