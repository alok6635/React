import React from "react";
//Navbar component-
import NavBarRoot from "./NavBarStyle/NavBarRoot";
//card component-
import MovieCardFirst from "./cart/Step-I/MovieCardFirst";
import MovieCardSecond from "./cart/step-II/MovieCardSecond";
import MovieListFirst from "./cart/step-III/MovieListFirst";
import MovieListSecond from "./cart/step-IV/MovieListSecond";
import MovieListThrid from "./cart/step-V/MovieListThrid";


const FtnRoot = () => {
  return (
    <>
      {/* <NavBarRoot /> */}
      {/* <MovieCardFirst /> */}
      {/* <MovieCardSecond /> */}
      {/* <MovieListFirst /> */}
      {/* <MovieListSecond /> */}
      <MovieListThrid />
    </>
  );
};

export default FtnRoot;
