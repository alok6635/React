import React from 'react';
import MovieCart from './MovieCart';

class MovieListFirst extends React.Component{
    constructor(){
        super()
        this.state={
            title: "Data pass by props indivisually & show multiple components- ",
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
addCounter=()=>{
    if(this.state.counter >=5){
        return;
    }
        this.setState({
            counter:this.state.counter+1,
        })
    }
// Decrease-
remCounter=()=>{
    if(this.state.counter <=0){
        return;
    }
        this.setState({
            counter:this.state.counter-1,
        })
    }
// Delete-
delCounter=()=>{
        this.setState({
            counter:this.state.counter=0,
        })
} 
    render(){
        const{title,plot,poster,rating,price,counter,incCounter,decCounter,delBtn,fav,isIncart}=this.state;
        return(
            <>
<MovieCart 
    title={title}
    plot={plot}
    poster={poster}
    rating={rating}
    price={price}
    counter={counter}
    incCounter={incCounter}
    decCounter={decCounter}
    delBtn={delBtn}
    fav={fav}
    isIncart={isIncart}
    addCounter={this.addCounter}
    remCounter={this.remCounter}
    delCounter={this.delCounter}
    />
            </>
        )
    }
}
export default MovieListFirst;