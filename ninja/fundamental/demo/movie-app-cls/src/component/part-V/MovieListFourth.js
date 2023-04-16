import React from 'react';
import MovieCart from './MovieCart';

class MovieListFourth extends React.Component{
    constructor(){
        super()
        this.state={
            moviesData :[
{
            heading:"class Based component -",
            title: "Showing data  map function and pass the data throw props -",
            plot: "Earth's mightiest heroes must come together and learn.",
            poster:
              "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            rating: "8.0",
            price: 199,
            counter: 0,
            incCounter:"https://cdn-icons-png.flaticon.com/128/2997/2997933.png",
            decCounter:"https://cdn-icons-png.flaticon.com/128/2801/2801932.png",
            delBtn:"https://cdn-icons-png.flaticon.com/128/1214/1214428.png",
            fav:false,
            isIncart:false,
},
{
           heading:"class Based component -",
           title: "Showing data map function and pass the data throw props -",
            plot: "Earth's mightiest heroes must come together and learn.",
            poster:
              "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            rating: "8.0",
            price: 199,
            counter: 0,
            incCounter:"https://cdn-icons-png.flaticon.com/128/2997/2997933.png",
            decCounter:"https://cdn-icons-png.flaticon.com/128/2801/2801932.png",
            delBtn:"https://cdn-icons-png.flaticon.com/128/1214/1214428.png",
            fav:false,
            isIncart:false,
}
            ]
        }
    }
    //Increase counter -
addCounter=()=>{
  if(this.state.counter >= 10){
      return;
  }
      this.setState({
          counter:this.state.counter+1,
      })
  }
    render(){
    const {moviesData} = this.state;
        return(
            <>
{
    moviesData.map((result,index)=>(
      <MovieCart getMovie = {result} key={index}/>
  ))
}
            </>
        )
    }
}
export default MovieListFourth;