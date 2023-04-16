import React from "react";

class MovieCard extends React.Component{

    render(){
        const {title, plot, poster, price, rating,star,fav,isInCart} =  this.props.getMovies;
        console.log(this.props.getMovies);
        const{getMovies,addStars}=this.props;
        return(
            <div className="movie-card">
                <div className="left">
                    <img alt="poster" src={poster} />
                </div>
                <div className="right">
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">Rs. {price}</div>
                    <div className="review">
                        <div className="rating">{rating}</div>
                        <div className="star-dis">
                            <img className="str-btn" 
                                alt="Decrease" 
                                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                onClick={this.decStars}
                            />
                            <img className="stars" 
                                    alt="stars" 
                                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                            />
                            <img className="str-btn" 
                                alt="increase" 
                                src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
                                onClick={()=>{addStars(getMovies)}}
                            />
                            <span className="starCount">{star}</span>
                        </div>
                        <button className={fav?"unfavourite-btn":"favourite-btn"}  onClick={this.toggleFav}>
                            {fav ? "Un-favourite":"Favourite"}
                        </button>
                        <button className={isInCart?"unfavourite-btn":"cart-btn"}  onClick={this.toggleCart}>
                            {isInCart ? "Remove from Cart":"Add to Cart"}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default MovieCard;