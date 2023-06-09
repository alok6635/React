import React from 'react';
import './index.css'
import Expense from './Components/expenselist/Expense'
import NewExpense from './Components/NewExpense/NewExpense'
const  App=()=> {
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
    <NewExpense/>
  <Expense item={expense}/>
    </div>
  );
}

export default App;
