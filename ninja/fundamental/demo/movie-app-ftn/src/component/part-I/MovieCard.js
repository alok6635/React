import React, {useState} from 'react';
import NavBarInline from './navbar/NavBarInline';
import NavBarStyledComponents from './navbar/NavBarStyledComponents';


let poster= "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg";
let title="Using data as a variable-";
let plot="When the menace known as the Joker wreaks havocm. ";
let price="Rs. 101";
let rating="6";
let counter =0;
let incIcon=" https://cdn-icons-png.flaticon.com/128/2997/2997933.png";
let decIcon="https://cdn-icons-png.flaticon.com/128/2801/2801932.png";
let delIcon="https://cdn-icons-png.flaticon.com/128/1214/1214428.png";
let addFav="favourite";
let addUnFav="Un-favourite";
let AddCart="Add to Cart";
let RemCart ="Remove to Cart";

const MovieCard = () => {
//create state- 
const[counter,setCounter]=useState(0);
const[fav,setFav]=useState(true); 
const[cart,setCart]=useState(true);
// Increase-
const handleInc=()=>{
  setCounter(counter + 1)
  }
// Decrease-
const handleDec=()=>{
  setCounter(counter - 1)
  }
// toggle-
const handleFAv=()=>{
  // setFav(false)
  setFav((prev)=>!prev)
}
const handleCart =()=>{
  setCart((prev)=>!prev)
}
  return (
    <>
  {/* <NavBarInline/> */}
  <NavBarStyledComponents/>
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
             <img src={incIcon} className="inc_star" onClick={handleInc}/>
             <img src={decIcon} className="dec_star" onClick={handleDec}/>
             <img src={delIcon} className="del_star"/>
              </div>
              {
                fav? <button className="favourite-btn" onClick={handleFAv}>{addFav}</button> :
                <button className="unfavourite-btn" onClick={handleFAv}>{addUnFav}</button>
              }
              {
                cart? <button className="cart-btn" onClick={handleCart}>{AddCart}</button> :
                <button className="unfavourite-btn" onClick={handleCart}>{RemCart}</button>
              }
                
{/* Other short  method -*/}
   {/* <button className={fav?"favourite-btn":"unfavourite-btn"} onClick={handleFAv}>
   {fav?"favourite":"unfavourite"}</button> */}
                  
            </div>
          </div>
        </div>
        </div>
        </>
  )
}

export default MovieCard; 
