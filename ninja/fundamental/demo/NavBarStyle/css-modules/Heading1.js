import React from 'react'
import headStyle from'./heading1.module.css';

const Heading1 = () => {
  return (
    <div className='wrapper'>
      <h1>Heading1</h1>
      <button className={headStyle.headbtn}>Button1</button>
    </div>
  )
}

export default Heading1;
