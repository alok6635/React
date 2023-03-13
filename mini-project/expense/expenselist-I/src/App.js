import './index.css'
import ExpenseItem from './Components/expenselist/ExpenseItem'


function App() {
let expense =[
  {
    id:"d1",
    title:"Hostel",
    amount:500,
    date:new Date()
  },
  {
    id:"d2",
    title:"College",
    amount:800,
    date:new Date()
  },
  {
    id:"d3",
    title:"Home",
    amount:600,
    date:new Date()
  }
]
  return (
    <div className="App">
  <ExpenseItem
    date ={expense[0].date}
   title= {expense[0].title}
    amount ={expense[0].amount}/>
  <ExpenseItem
    date ={expense[1].date}
   title= {expense[1].title}
    amount ={expense[1].amount}/>
  <ExpenseItem
    date ={expense[2].date}
   title= {expense[2].title}
    amount ={expense[2].amount}/>
    </div>
  );
}

export default App;
