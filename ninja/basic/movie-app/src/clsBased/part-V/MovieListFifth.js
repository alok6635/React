import React from "react";
import MovieCard from "./MovieCard";

class MovieListFifth extends React.Component {
  constructor(){
    super();
    this.state = {
        movies : [
            {
      heading:"class Based component -",
              title: 'Change star value of individual component ',                  
              plot:
                "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
              poster:
                'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
              rating: '8.0',            
              price: 99,            
              stars: 0,
              fav: false,
              isInCart: false                  
            },
            {
      heading:"class Based component -",
              title: 'Change star value of individual component ',                  
              plot:
                'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
              poster:
                'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
              rating: '9.0',            
              price: 199,            
              stars: 0,            
              fav: false,
              isInCart: false                  
            },
           ]
    } 
}

handleAddStars = (movie)=>{
const {movies} = this.state;
const movieId = movies.indexOf(movie);

if(movies[movieId].stars <5){
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
const {movies} = this.state;
const movieId = movies.indexOf(movie);

movies[movieId].isInCart = !movies[movieId].isInCart;

this.setState({
    movies
})
}
render(){
    const {movies} =  this.state;
      
    return(
        <div className="main">
            {movies.map((movie,index) => (
            <MovieCard movies = {movie}
                       key = {index}
                       onIncStars = {this.handleAddStars}
                        onDecStars = {this.handleDecStars}
                        onClickFav = {this.handleToggleFav}
                        onClickAddtocart = {this.handleAddtocart}/>

        ))}              
        </div>
    )
}
}

export default MovieListFifth;
