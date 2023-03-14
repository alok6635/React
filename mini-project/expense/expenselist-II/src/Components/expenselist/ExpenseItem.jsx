import React,{useState} from 'react'
import './ExpenseItem.css'
import ExpenseDate from '../expenselist/ExpenseDate' 

const ExpenseItem=(props)=>{
const[title, setTitle]= useState(props.title);

const clickHandler =()=>{
    setTitle('New Title..');
}
    return(
        <>
<div>
<div className='exp_cover'>
<div className='exp_involpe'>
<div className='exp_data'><ExpenseDate date={props.date}/></div>
<div className='exp_content'><p>{title}</p></div>
</div>
<div className='amount_cover'>
<div className='exp_price'>${props.amount}</div>
<button onClick={clickHandler}>Change title </button>
</div>

</div>
</div>
        </>
        )
        
 }
 export default ExpenseItem;