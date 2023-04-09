import React from "react";
import MovieCardfirst from "./part-I/MovieCardfirst";
import MovieListFirst from './part-II/MovieListFirst';
import MovieListSecond from './part-III/MovieListSecond';
import MovieListThrid from './part-IV/MovieListThrid';
import MovieListFourth from './part-V/MovieListFourth';
import MovieListFifth from './part-VI/MovieListFifth';
import Stage from './stage/Stage';

class ClsRoot extends React.Component {
  render() {
    return (
      <>
        {/* <MovieCardfirst /> */}
        {/* <MovieListFirst/> */}
        {/* <MovieListSecond/> */}
        {/* <MovieListThrid/> */}
        {/* <MovieListFourth/> */}
        {/* <MovieListFifth/> */}
        <Stage/>
      </>
    );
  }
}
export default ClsRoot;
