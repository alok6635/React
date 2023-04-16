import React from 'react';
import MovieCard from './MovieCard';

const MovieListFourth = () => {
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
     RemCart:"Remove to Cart",
    },
    {
      poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      title:"Use map function & show data in same page -",
      plot:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham",
      price:"Rs. 231",
      rating:"4",
      counter:0,
      incIcon:"https://cdn-icons-png.flaticon.com/128/2997/2997933.png",
      decIcon:"https://cdn-icons-png.flaticon.com/128/2801/2801932.png",
      delIcon:"https://cdn-icons-png.flaticon.com/128/1214/1214428.png",
      addFav:"favourite",
      AddCart:"Add to Cart",
      unFav:"un-favourite",
     RemCart:"Remove to Cart",
    }
  ]
  return (
    <>  
<MovieCard data ={movies}/>    
    </>
  )
}

export default MovieListFourth;
