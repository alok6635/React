import React from "react";

class MovieCard extends React.Component{
    constructor(){
        super();
//Creating the state object- 
        this.state = {
            heading:"class Based component -",
                title: 'state and jsx is the same page-', 
                plot:
                    "Earth's mightiest heroes must come together and learn to fight as a team.", 
                poster:
                    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                rating: '8.0',
                price: 199,
                star: 0,
                fav: false,
                isInCart: false
        } 
//Binding the event handler in the constructor if event handler is not an arrow function
// this.addStars = this.addStars.bind(this)
  }
//Creating an arrow function for addStars which automatically binds to the current instance
  addStars = () => {
    if(this.state.star >= 5){
        return
    }
    this.setState({
        star : this.state.star + 1
    })
//Form 2 of setState() - increasing the star count by 1
    /**
    this.setState((prevState) => {
        return {
            star: prevState + 1
        }
    })
     */
  }
  // event handler to decrease the star by 1
  decStars = () => {
    //Condition to stop the stars from decreasing beyond 0
    if(this.state.star <= 0){
        return
    }
    //form1 of setState
    this.setState({
        star: this.state.star - 1
    })
  }

  //Toggle Favourite button
  toggleFav= () => {
    this.setState({
        fav: !this.state.fav
    })
  }
  
  //Toggle add to cart button
  toggleCart= () => {
    this.setState({
        isInCart: !this.state.isInCart
    })
 }
    render(){
//Destructing the state object in render function
        const {title,heading, plot, poster, price, rating,star,fav,isInCart} =  this.state;
        return(
            <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img alt="poster" src={poster} />
                </div>
                <div className="right">
                <div className="heading">{heading}</div>
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">Rs. {price}</div>
                    <div className="review">
                        <div className="rating">{rating}</div>
                        <div className="star-dis">
                         <img className="str-btn" 
                                alt="increase" 
                                src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
// No binding required as addStars() is an arrow function
                                onClick={this.addStars}
                            />
                            <img className="str-btn" 
                                alt="Decrease" 
                                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                onClick={this.decStars}
                            />
                            <span className="starCount">{star}</span>
                        </div>
                        <button className={fav?"unfavourite-btn":"favourite-btn"}  onClick={this.toggleFav}>
                            {fav ? "Un-favourite":"Favourite"}
                        </button>
                        {/**
                         * {fav? <button className="unfavourite-btn" onClick={this.toggleFav}> Un-favourite </button> :
                         *       <button className="favourite-btn" onClick={this.toggleFav}> favourite </button>}
                         */}

                            {/**Conditional Rendering on Add to Cart Button */}
                        <button className={isInCart?"unfavourite-btn":"cart-btn"}  onClick={this.toggleCart}>
                            {isInCart ? "Remove from Cart":"Add to Cart"}
                        </button>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}

export default MovieCard;