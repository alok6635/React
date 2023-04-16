import React, { useState } from 'react';

function MovieCard(props) {
//State- 
const[counter,setCounter]=useState(0);
//Increase-
const handleInc=()=>{
  setCounter(counter+1);
  console.log(counter)
}
  return (
<div className="main">
{
     props.data.map((result,index)=>(
    <div className="movie-card" key={index}>
<div className="left"><img src={result.poster} alt="poster"/></div>
<div className="right">
<div className="title">{result.title}</div>
  <div className="plot">{result.plot}</div>
  <div className="price">{result.price}</div>
  <div className="review">
    <div className="rating">{result.rating}</div>
    <div className="star-dis">
    <span className="starCount">{result.counter}</span>
   <img src={result.incIcon} className="inc_star" onClick={handleInc}/>
   <img src={result.decIcon} className="dec_star"/> 
   <img src={result.delIcon} className="inc_star" />
    </div>
    <button className="favourite-btn">{result.addFav}</button>
    <button className="cart-btn">{result.AddCart}</button>
  </div>
</div>
</div>
  ))
}
</div>
  );
}

export default MovieCard;
