import React, { useState } from 'react'

const MovieCard  = (props) => {
// state-
const[counter,setCounter] =useState(0);
const[fav,setFav]=useState(true);
const[cart,setCart]=useState(true);
// Increase-
 const handleInc=()=>{
  setCounter(counter+1);
  }
  // Decrease-
  const handleDec=()=>{
    setCounter(counter-1);
  }
  // Toggle-
const  handleFav=()=>{
    setFav((prev)=>! prev)
  }
  const handleCart =()=>{
    setCart((prev)=>! prev)
  }
  const{poster,title,plot,price,rating,decIcon,incIcon,delIcon,addFav,unFav,AddCart,RemCart}=props;
  return (
    <div>
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img src={poster} alt="poster"/>
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">{price}</div>
            <div className="review">
              <div className="rating">{rating}</div>
              <div className="star-dis">
              <span className="starCount">{counter}</span>
             <img src={decIcon} className="inc_star" onClick={handleInc}/>
             <img src={incIcon} className="dec_star" onClick={handleDec}/>
             <img src={delIcon} className="del_star"/>
              </div>
              {
                fav ? <button className="favourite-btn" onClick={handleFav}>{addFav}</button>:
                <button className="unfavourite-btn" onClick={handleFav}>{unFav}</button>
              }
              {
                cart ? <button className="cart-btn" onClick={handleCart}>{AddCart}</button>:
                <button className="unfavourite-btn" onClick={handleCart}>{RemCart}</button>
              }
                  
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default MovieCard 
