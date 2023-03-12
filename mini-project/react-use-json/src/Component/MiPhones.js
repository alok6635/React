import React from 'react'
const MiPhone = ({miList}) => {

  return (
    <div className='features'>
<<<<<<< HEAD
    <h2> Mi Phones Store </h2>
=======
    <h2> Mi Phones Store</h2>
>>>>>>> a64b885665e99dd2bb42b6cd1bcc4f4feefd9c75
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
