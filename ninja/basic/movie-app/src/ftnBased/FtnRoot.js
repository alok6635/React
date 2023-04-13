import React from "react";

import MovieCardFirst from "./part-I/MovieCardFirst";
import MovieCardSecond from "./part-II/MovieCardSecond";
import MovieListFirst from "./part-III/MovieListFirst";
import MovieListSecond from "./part-IV/MovieListSecond";
import MovieListThrid from "./part-V/MovieListThrid";
import Root from './part-VI/Root';
import Stage from './staging/Stage';


const FtnRoot = () => {
  return (
    <>
      <MovieCardFirst />
      <MovieCardSecond />
      {/* <MovieListFirst /> */}
      {/* <MovieListSecond /> */}
      {/* <MovieListThrid /> */}
      {/* <Root/> */}
      {/* <Stage/> */}
    </>
  );
};

export default FtnRoot;
