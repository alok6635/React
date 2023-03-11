import React from 'react'
import "./ExpenseDate.css"

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US',{month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-us',{day:'2-digit'})
return (
<h5 className='expense_date'>
<div className='expense_date_day'>{ day }</div>
<div className='expense_date_month'>{ month }</div>
  <div className='expense_date_year'>{ year }</div>
  </h5>
  )
}

export default ExpenseDate
