import React from 'react';

class MovieListThrid extends React.Component{
    constructor(){
        super()
        this.state={
            moviesData :[
{
            heading:"class Based component -",
            title: "Showing data by map function in same page  -",
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
           title: "Showing data by map function in same page  -",
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
      <div className="main">
            <div className="movie-card">
                <div className="left"><img alt="poster" src={result.poster}/></div>
                <div className="right">
                <div className="heading">{result.heading}</div>
                    <div className="title">{result.title}</div>
                    <div className="plot">{result.plot}</div>
                    <div className="price">Rs. {result.price}</div>
                    <div className="review">
                        <div className="rating">{result.rating}</div>
                        <div className="star-dis">
                        <span className="starCount">{result.counter}</span>
                        <img className="str-btn" alt="increase" src={result.incCounter} onClick={this.addCounter}/>
                            <img className="str-btn" alt="Decrease" src={result.decCounter} onClick={this.remCounter} />
                            <img  className="str-btn del_btn" alt="delete"src={result.delBtn} onClick={this.allDelete}/>
                        </div>
                        <button className={result.fav ? 'unfavourite-btn':'favourite-btn'} onClick={this.handleFav}>
                        {result.fav ? 'unfavourite-btn':'favourite-btn'} 
                        </button>
                        <button className={result.isIncart? "unfavourite-btn":"cart-btn"}
                         onClick={this.handleAddToCart}>{result.isIncart ? "Remove from Cart":"Add to cart"}</button>
                    </div>
                </div>
            </div>
          </div>
  ))
}
            </>
        )
    }
}
export default MovieListThrid;