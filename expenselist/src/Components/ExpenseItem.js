import React from 'react'
import "./ExpenseItem.css"
import ExpenseDate from '../Components/ExpenseDate.js'

const ExpenseItem = (props) => {
  return (
  <>
  <div className='exprense_item'> 
  <ExpenseDate date={props.date}/>
<div className='exprense_item_description'>
  <h2>{props.title}</h2>
  <div className='exprense_item_prices'>{props.amount}</div>
  </div>
</div>
  </>
  )
}

export default ExpenseItem
