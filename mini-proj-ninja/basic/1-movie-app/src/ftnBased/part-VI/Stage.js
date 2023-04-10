import React from "react";
import {ToatlData} from "./MoviesData";
import MovieList from "./MovieList";


const Stage =()=>{
  return(
    <>
    <MovieList TotalMovies ={ToatlData}/>
    </>

  )
}

 export default Stage;