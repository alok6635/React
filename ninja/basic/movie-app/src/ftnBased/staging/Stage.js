import React from "react";
import MovieList from "./MovieList";
import NavBar from "./NavBar";
import {ToatlMovie} from "./MoviesData";

export default class Stage extends React.Component{
  constructor(){
    super();
    this.state = {
        movies : ToatlMovie,
        cartCount: 0,
    } 
  }
  
  handleAddStars = (movie)=>{
  const {movies} = this.state;
  const movieId = movies.indexOf(movie);

  if(movies[movieId].stars <10){
      movies[movieId].stars += 1
  }
  this.setState({
      movies
  });
  }

  handleDecStars = (movie)=>{
  const {movies} = this.state;
  const movieId = movies.indexOf(movie);

  if(movies[movieId].stars > 0){
      movies[movieId].stars -= 1;
  }
  this.setState({
      movies
  })
  }

  handleToggleFav = (movie)=> {
  const {movies} = this.state;
  const movieId = movies.indexOf(movie);

  movies[movieId].fav = !movies[movieId].fav;

  this.setState({
      movies
  })
  }

  handleAddtocart = (movie)=> {
  let {movies,cartCount} = this.state;
  const movieId = movies.indexOf(movie);

  movies[movieId].isInCart = !movies[movieId].isInCart;

  if(movies[movieId].isInCart){
    cartCount =  cartCount+1;
   }
   else{
     cartCount =  cartCount-1;
   }
   
   this.setState({
     movies,
     cartCount
   })
  }

  render(){
    const {movies,cartCount} = this.state;
    return(
      <>
      <NavBar cartCount={cartCount}/>
      <MovieList movies ={ToatlMovie}
                 onIncStars = {this.handleAddStars}
                 onDecStars = {this.handleDecStars}
                 onClickFav = {this.handleToggleFav}
                 onClickAddtocart = {this.handleAddtocart}/>
      </>

    )
  }
}