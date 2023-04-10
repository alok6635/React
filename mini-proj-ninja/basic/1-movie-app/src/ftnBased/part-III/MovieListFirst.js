import React from "react";
import MovieCard from "./MovieCard";

const MovieListFirst = () => {
  let Image= "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg";
  let Title="Functional Based- ";
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
    <>
      <MovieCard
        Image={Image}
        Title ={Title}
        plot={plot}
        price={price}
        rating={rating}
        decreaseBtn={decreaseBtn}
        star={star}
        IncreaseBtn={IncreaseBtn}
        StarValue={StarValue}
        addFav={addFav}
        AddCart={AddCart}
      />
    </>
  );
};

export default MovieListFirst;
