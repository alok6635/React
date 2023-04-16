import React, { useEffect, useState } from 'react'

const MovieListThrid = () => {
  const movies =[
    {
      poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      title:"Use map function & show data in same page -",
      plot:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham",
      price:"Rs. 301",
      rating:"2",
      counter:0,
      incIcon:"https://cdn-icons-png.flaticon.com/128/2997/2997933.png",
      decIcon:"https://cdn-icons-png.flaticon.com/128/2801/2801932.png",
      delIcon:"https://cdn-icons-png.flaticon.com/128/1214/1214428.png",
      addFav:"favourite",
      AddCart:"Add to Cart",
      unFav:"un-favourite",
     RemCart:"Remove to Cart"
    },  
    {
      poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      title:"Use map function & show data in same page -",
      plot:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham",
      price:"Rs. 211",
      rating:"5",
      counter:0,
      incIcon:"https://cdn-icons-png.flaticon.com/128/2997/2997933.png",
      decIcon:"https://cdn-icons-png.flaticon.com/128/2801/2801932.png",
      delIcon:"https://cdn-icons-png.flaticon.com/128/1214/1214428.png",
      addFav:"favourite",
      AddCart:"Add to Cart",
      unFav:"un-favourite",
     RemCart:"Remove to Cart"
    }
  ]
const handleInc=()=>{
      setCounter(counter+1);
    console.log(counter);  
   }

  return (
    <>
{
  movies.map((result,index)=>(
  <div className="main " key={index}>
  <div className="movie-card" >
<div className="left">
<img src={result.poster} alt="poster"/></div>
<div className="right">
<div className="title">{result.title}</div>
<div className="plot">{result.plot}</div>
<div className="price">{result.price}</div>
<div className="review">
<div className="rating">{result.rating}</div>
  <div className="star-dis">
    <span className="starCount">{result.counter}</span>
  <img src={result.incIcon} className="dec_star" onClick={handleInc}/> 
   <img src={result.decIcon} className="dec_star"/> 
   <img src={result.delIcon} className="inc_star" />
    </div>
    <button className="favourite-btn">{result.addFav}</button>
    <button className="cart-btn">{result.AddCart}</button>
  </div>
</div>
</div>
</div>
  ))
}
    </>
  )
}

export default MovieListThrid;
