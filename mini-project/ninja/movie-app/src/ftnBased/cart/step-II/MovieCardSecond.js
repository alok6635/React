import React from "react";

function MovieCardSecond() {
let posterImage= "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg";
let CardTitle="Functional Based-";
let plot="When the menace known as the Joker wreaks havoc and chaos on the people of Gotham";
let price="Rs. 101";
let rating="6";
let StarValue =5;
let decreaseBtn="https://cdn-icons-png.flaticon.com/128/2801/2801932.png";
let star="https://cdn-icons-png.flaticon.com/128/2107/2107957.png";
let IncreaseBtn="https://cdn-icons-png.flaticon.com/128/2997/2997933.png";
let addFav="favourite";
let AddCart="Add to Cart";

  return (
    <div className="main">
    <div className="movie-card">
      <div className="left">
        <img src={posterImage} alt="poster"/>
      </div>
      <div className="right">
        <div className="title">{CardTitle}</div>
        <div className="plot">{plot}</div>
        <div className="price">{price}</div>
        <div className="review">
          <div className="rating">{rating}</div>
          <div className="star-dis">
         <img src={decreaseBtn} className="dec_star"/>
         <img src={star} className="star"/>
         <img src={IncreaseBtn} className="inc_star"/>
            <span className="starCount">{StarValue}</span>
          </div>
          <button className="favourite-btn">{addFav}</button>
          <button className="cart-btn">{AddCart}</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default MovieCardSecond;
