import React from 'react'
import "./exprense.css"


const ExpenseItem = (props) => {
const month = props.date.toLocaleString('en-US',{month: 'long'});
const year = props.date.getFullYear();
const day = props.date.toLocaleString('en-us',{day:'2-digit'})



  return (
  <>
  <div className='exprense_item'>
<h5>
<div>{ day }</div>
<div>{ month }</div>
  <div>{ year }</div>
</h5>
<div className='exprense_item_description'>
  <h2>{props.title}</h2>
  <div className='exprense_item_prices'>{props.amount}</div>
  </div>
</div>
  </>
  )
}

export default ExpenseItem
