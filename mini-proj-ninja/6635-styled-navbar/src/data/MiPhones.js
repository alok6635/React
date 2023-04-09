import React from 'react';
import './miphone.css';

const MiPhone = ({miList}) => {
  return (
    <div className='features'>
    <h5> Mi Phones Store </h5>
      <ul>
      {
        miList.map((element, index)=>(
            <li>
            <h2>{index +1}</h2>
            <h3>Mi Phone</h3>
            <img src={element.image}></img>
            <span>{element.price}</span>
            <h5>{element.name}</h5>
        </li>
        ))
       
      }
       
      </ul>
    </div>


  )
}

export default MiPhone
