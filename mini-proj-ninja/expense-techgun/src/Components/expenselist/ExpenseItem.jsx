import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../expenselist/ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <>
      <div>
        <div className="exp_cover">
          <div className="exp_involpe">
            <div className="exp_data">
              <ExpenseDate date={props.date} />
            </div>
            <div className="exp_content">
              <p>{props.title}</p>
            </div>
          </div>
          <div className="amount_cover">
            <div className="exp_price">${props.amount}</div>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default ExpenseItem;
