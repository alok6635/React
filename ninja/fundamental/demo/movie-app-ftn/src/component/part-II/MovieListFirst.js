import React from 'react'
import MovieCard from './MovieCard';

const MovieListFirst = () => {
    let poster= "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg";
    let title="Data pass throw a props & pass a component indiviual element-";
    let plot="When the menace known as the Joker wreaks havoc and chaos on the people of Gotham";
    let price="Rs. 101";
    let rating="6";
    let counter =0;
    let incIcon="https://cdn-icons-png.flaticon.com/128/2801/2801932.png";
    let decIcon="https://cdn-icons-png.flaticon.com/128/2997/2997933.png";
    let delIcon="https://cdn-icons-png.flaticon.com/128/1214/1214428.png";
    let addFav="favourite";
    let unFav="un-favourite"
    let AddCart="Add to Cart";
    let RemCart ="Remove to Cart"

  return (
    <>
     <MovieCard
        poster ={poster}
        title ={title}
        plot = {plot}
        price ={price}
        rating ={rating}
        counter = {counter}
        incIcon = {incIcon}
        decIcon={decIcon}
        delIcon={delIcon}
        addFav={addFav}
        unFav={unFav}
        AddCart={AddCart}
        RemCart={RemCart}
     /> 
    </>
  )
}

export default MovieListFirst
