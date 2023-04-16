import React from "react";
import MovieCard from "./MovieCard";

class MovieListFifth extends React.Component{
    constructor(){
        super();
        this.state = {
            totalMovies :[
                {
                  title: 'The Avengers',                  
                  plot:
                    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  rating: '8.0',            
                  price: 99,            
                  star: 0,
                  fav: false,
                  isInCart: false                  
                },
                {
                  title: 'Iron Man',                 
                  plot:
                    'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                  rating: '7.9',            
                  price: 139,            
                  star: 0,            
                  fav: false,
                  isInCart: false                  
                }]
        } 
  }
  addStars = () => {
    if(this.state.star >= 5){
        return
    }
    this.setState({
        star : this.state.star + 1
    })
    this.setState((prevState) => {
        return {
            star: prevState + 1
        }
    })
  }
  decStars = () => {
    if(this.state.star <= 0){
        return
    }
    this.setState({
        star: this.state.star - 1
    })
  }
  toggleFav= () => {
    this.setState({
        fav: !this.state.fav
    })
  }
  toggleCart= () => {
    this.setState({
        isInCart: !this.state.isInCart
    })
 }

 handleIncStar=(movieList)=>{
  const {totalMovies} = this.state;
  console.log(totalMovies);
const movieid=totalMovies.indexOf(movieList); 
if(totalMovies[movieid].star>=5){
  return;
}

totalMovies[movieid].star +=1; 
this.setState({
  totalMovies:totalMovies,
 })
}
    render(){
        const {totalMovies} =  this.state;
        return(
            <div className="main">
                {totalMovies.map((result) => 
                <MovieCard getMovies= {result} 
                  addStars ={this.handleIncStar}/>)}              
            </div>
        )
    }
}

export default MovieListFifth;