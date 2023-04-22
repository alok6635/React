import React from 'react'
import MovieCard from './MovieCard';

const MovieListSecond = () => {
  const movies =[
    {
       poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
       title:"Pass the data throw a props & components index bases -",
       plot:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham",
       price:"Rs. 101",
       rating:"6",
       counter :0,
       incIcon:"https://cdn-icons-png.flaticon.com/128/2801/2801932.png",
       decIcon:"https://cdn-icons-png.flaticon.com/128/2997/2997933.png",
       delIcon:"https://cdn-icons-png.flaticon.com/128/1214/1214428.png",
       addFav:"favourite",
       AddCart:"Add to Cart",
       unFav:"un-favourite",
      RemCart:"Remove to Cart"
    },
    {
      poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      title:"Pass the data throw a props & components index bases -",
      plot:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham",
      price:"Rs. 301",
      rating:"2",
      incIcon:"https://cdn-icons-png.flaticon.com/128/2801/2801932.png",
      decIcon:"https://cdn-icons-png.flaticon.com/128/2997/2997933.png",
      delIcon:"https://cdn-icons-png.flaticon.com/128/1214/1214428.png",
      addFav:"favourite",
      AddCart:"Add to Cart",
      unFav:"un-favourite",
     RemCart:"Remove to Cart"
    }
  ]
  return (
    <>
     <MovieCard
        poster={movies[0].poster}
        title={movies[0].title}
        plot={movies[0].plot}
        price={movies[0].price}
        rating={movies[0].rating}
        counter={movies[0].counter}
        decIcon={movies[0].decIcon}
        incIcon={movies[0].incIcon}
        delIcon={movies[0].delIcon}
        addFav={movies[0].addFav}
        AddCart={movies[0].AddCart}
        unFav={movies[0].unFav}
        RemCart={movies[0].RemCart}
     /> 
     <MovieCard
        poster={movies[1].poster}
        title={movies[1].title}
        plot={movies[1].plot}
        price={movies[1].price}
        rating={movies[1].rating}
        counter={movies[1].counter}
        decIcon={movies[1].decIcon}
        incIcon={movies[1].incIcon}
        delIcon={movies[1].delIcon}
        addFav={movies[1].addFav}
        AddCart={movies[1].AddCart}
        unFav={movies[1].unFav}
        RemCart={movies[1].RemCart}
     /> 
    
    </>
  )
}

export default MovieListSecond;
