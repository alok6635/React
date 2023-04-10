import React from "react";
import MovieCard from "./MovieCard";

 const MovieList=(props)=>{
    return(
        <div className="main">
            {props.TotalMovies.map((getMovie,index) => (
            <MovieCard ShowMovies = {getMovie}
                        key = {index}/>
        ))}              
        </div>
    )
}


export default MovieList;