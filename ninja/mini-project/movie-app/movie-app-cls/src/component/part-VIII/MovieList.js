import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component{
    render(){
        const {totalMovies,addStars} =  this.props;
        return(
            <div className="main">{totalMovies.map((result) =>(
                <MovieCard getMovies= {result} 
                  addStars ={addStars}/>
                  ))}              
            </div>
        )
    }
}
export default MovieList;