import React from 'react';
import {totalMovies} from './MoviesData';
import MovieList from './MovieList';

class Staging extends React.Component{
    constructor(){
        super();
        this.state = {
          totalMovies:totalMovies,
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
    const{totalMovies}=this.state;
    return(
        <>
            <MovieList totalMovies = {totalMovies}
              addStars ={this.handleIncStar}
            />
        </>
    )
}
}

export default Staging;
