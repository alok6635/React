import React from "react";
import {ToatlData} from "./MoviesData";
import MovieList from "./MovieList";


const Root =()=>{
  return(
    <>
    <MovieList TotalMovies ={ToatlData}/>
    </>

  )
}

 export default Root;