import React from "react";
import MovieCard from "./MovieCard";

class MovieListThrid extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Passing state one time throw props -",
      plot: "Earth's mightiest heroes must come together and learn.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      rating: "8.0",
      price: 199,
      star: 0,
      fav: false,
      isInCart: false,
    };
  }
  render() {
    const { poster, title, plot, rating, price, star, fav, isInCart } =
      this.state;
    return (
      <>
        <MovieCard data={this.state}/>
      </>
    );
  }
}

export default MovieListThrid;
