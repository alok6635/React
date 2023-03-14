import React from 'react'
const TV = ({tvlist}) => {

  return (
    <div className='features'>
      <h2> Tv Serices </h2>
      <ul>{
        tvlist.map((element, index)=>(
          <li>
<h2>{index +1}</h2>
<h3>Tv Serices</h3>
<img src ={element.image}></img>
<span>{element.price}</span>
<h5>{element.name}</h5>
</li>
        ))
      }
      </ul>
    </div>
  )
}

export default TV
