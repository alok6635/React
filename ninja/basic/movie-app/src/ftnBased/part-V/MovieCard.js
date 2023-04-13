import React, { useState } from "react";

function MovieCard(props) {
const[StarValue,setStarValue]=useState(0);
 let handleIncrement=(data)=>{

  if (StarValue + data >= 0) {
    setStarValue(StarValue+ data)
  }
 }
  return (
<div className="main">
{
  props.item.map((val,index)=>(
    <div className="movie-card" key={index}>
<div className="left"><img src={val.Image} alt="poster"/></div>
<div className="right">
<div className="title">{val.Title}</div>
  <div className="plot">{val.plot}</div>
  <div className="price">{val.price}</div>
  <div className="review">
    <div className="rating">{val.rating}</div>
    <div className="star-dis">
   <img src={val.decreaseBtn} className="dec_star" onClick={() => handleIncrement(-1)}/> 
   <img src={val.star} className="star" />
   <img src={val.IncreaseBtn} className="inc_star" onClick={() => handleIncrement(1)}/>
      <span className="starCount">{StarValue}</span>
    </div>
    <button className="favourite-btn">{val.addFav}</button>
    <button className="cart-btn">{val.AddCart}</button>
  </div>
</div>
</div>
  ))
}


    </div>
  );
}

export default MovieCard;
