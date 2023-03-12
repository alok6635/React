import React from 'react';
import Expense from './Components/Expense'

let App=() => {
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
   <Expense item = {expense}/>
   
    </div>
  );
}

export default App;
