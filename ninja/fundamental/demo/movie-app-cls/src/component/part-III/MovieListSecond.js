import React from 'react';
import MovieCart from './MovieCart';

class MovieListSecond extends React.Component{
    constructor(){
        super()
        this.state={
            heading:"class Based component -",
            title: "Data pass by props one times & show multiple components- ",
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
    }
//Increase counter -
    render(){
        return(
            <>
                <MovieCart data ={this.state}
                />
            </>
        )
    }
}
export default MovieListSecond;