import React from "react";
import MovieCard from "./MovieCard";

const MovieListThrid = () => {
  const movies = [
    {
      Image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      Title: "Functional Based-",
      plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      price: 99,
      rating: 4.5,
      StarValue: 0,
      decreaseBtn: "https://cdn-icons-png.flaticon.com/128/2801/2801932.png",
      star: "https://cdn-icons-png.flaticon.com/128/2107/2107957.png",
      IncreaseBtn: "https://cdn-icons-png.flaticon.com/128/2997/2997933.png",
      addFav: "favourite-btn",
      AddCart: "Add to cart",
    },
    {
      Image:
      'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
      Title: "Functional Based-",
      plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      price: 399,

      rating: 2.5,
      StarValue: 6,
      decreaseBtn: "https://cdn-icons-png.flaticon.com/128/2801/2801932.png",
      star: "https://cdn-icons-png.flaticon.com/128/2107/2107957.png",
      IncreaseBtn: "https://cdn-icons-png.flaticon.com/128/2997/2997933.png",
      addFav: "favourite-btn",
      AddCart: "Add to cart",
    },
   
  ];

  return (
    <>
    <MovieCard item ={movies}/>
    </>
  );
};

export default MovieListThrid;
