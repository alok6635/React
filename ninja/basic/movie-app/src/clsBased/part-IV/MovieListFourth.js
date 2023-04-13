import React from "react";
import MovieCard from "./MovieCard";

class MovieListFourth extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
      heading:"class Based component -",
          title: " Show movie list by map () ",
          plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
          rating: "8.0",
          price: 99,
          star: 0,
          fav: false,
          isInCart: false,
        },
        {
      heading:"class Based component -",
      title: " Show movie list by map () ",
          plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
          rating: "9.0",
          price: 199,
          star: 0,
          fav: false,
          isInCart: false,
        },
      ],
    };
  }
  render() {
    const { movies } = this.state;
    return (
      <div className="main">
        {movies.map((data, index) => (
          <MovieCard movies={data} key={index} />
        ))}
      </div>
    );
  }
}

export default MovieListFourth;
