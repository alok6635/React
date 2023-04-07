import React from "react";


function MovieCard(props) {
  return (
<div className="main">
<div className="movie-card">
<div className="left"><img src={props.Image} alt="poster"/></div>
<div className="right">
<div className="title">{props.Title}</div>
  <div className="plot">{props.plot}</div>
  <div className="price">{props.price}</div>
  <div className="review">
    <div className="rating">{props.rating}</div>
    <div className="star-dis">
   <img src={props.decreaseBtn} className="dec_star"/>
   <img src={props.star} className="star"/>
   <img src={props.IncreaseBtn} className="inc_star"/>
      <span className="starCount">{props.StarValue}</span>
    </div>
    <button className="favourite-btn">{props.addFav}</button>
    <button className="cart-btn">{props.AddCart}</button>
  </div>
</div>
</div>
    </div>
  );
}

export default MovieCard;
