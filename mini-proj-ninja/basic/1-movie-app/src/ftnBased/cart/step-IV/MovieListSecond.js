import React from "react";
import MovieCard from "./MovieCard";

const MovieListSecond = () => {
  const movies = [
    {
      Image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      cardTitle:"Functional Based-",
      plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      price: 99,
      rating: 4.5,
      StarValue: 5,
      decreaseBtn: "https://cdn-icons-png.flaticon.com/128/2801/2801932.png",
      star: "https://cdn-icons-png.flaticon.com/128/2107/2107957.png",
      IncreaseBtn: "https://cdn-icons-png.flaticon.com/128/2997/2997933.png",
      addFav: "favourite-btn",
      AddCart: "Add to cart",
    },
    {
      Image:
      'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
      cardTitle:"Functional Based-",
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
    <MovieCard
        Image={movies[0].Image}
        cardTitle={movies[0].cardTitle}
        plot={movies[0].plot}
        price={movies[0].price}
        rating={movies[0].rating}
        StarValue={movies[0].StarValue}
        decreaseBtn={movies[0].decreaseBtn}
        star={movies[0].star}
        IncreaseBtn={movies[0].IncreaseBtn}
        addFav={movies[0].addFav}
        AddCart={movies[0].AddCart}
      />
    <MovieCard
        Image={movies[1].Image}
        cardTitle={movies[1].cardTitle}
        plot={movies[1].plot}
        price={movies[1].price}
        rating={movies[1].rating}
        StarValue={movies[1].StarValue}
        decreaseBtn={movies[1].decreaseBtn}
        star={movies[1].star}
        IncreaseBtn={movies[1].IncreaseBtn}
        addFav={movies[1].addFav}
        AddCart={movies[1].AddCart}
      />
      
    </>
  );
};

export default MovieListSecond;
