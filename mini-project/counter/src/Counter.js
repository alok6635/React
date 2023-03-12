import React, { useState } from 'react';
import './counter.css'

export default function Counter() {
    const initialState = 0;
  const [counter, setCounter] = useState(initialState);
console.log("counter", counter);

const handleIncrement =() =>{
    // state increase by one
    setCounter(counter + 1);
}

const handleDrecrement =() =>{
    setCounter(counter - 1);
}

const asyncFun = () =>{
  console.log("async counter start", counter);
  // setCounter(counter+1);
  setCounter((prevState)=>prevState+1); 
} 

const handleAsync = () =>{
  setTimeout(asyncFun,4000)
}



  return (
  <React.Fragment>
  <div className='counter_head'>Counter: {counter}</div>
  <div className='btn_cover'>
  <button onClick={handleIncrement}>Increment</button>
  <button onClick={handleDrecrement}>Decrement</button>
  <button onClick={handleAsync}>Async Increment</button>
  </div>
  </React.Fragment>
  )
}
