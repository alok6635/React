import React from 'react';

class MovieCart extends React.Component{
    addCounter=()=>{
        if(this.state.counter >= 5){
            return;
        }
            this.setState({
                counter:this.state.counter+1,
            })
        }
    render(){
        const{heading,title,plot,poster,rating,price,counter,incCounter,decCounter,delBtn,fav,isIncart,addCounter}=this.props.data;
    return(
        <>
           <div className="main">
            <div className="movie-card">
                <div className="left"><img alt="poster" src={poster}/></div>
                <div className="right">
                <div className="heading">{heading}</div>
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">Rs. {price}</div>
                    <div className="review">
                        <div className="rating">{rating}</div>
                        <div className="star-dis">
                        <span className="starCount">{counter}</span>
                        <img className="str-btn" alt="increase" src={incCounter} onClick={addCounter}/>
                            <img className="str-btn" alt="Decrease" src={decCounter}/>
                            <img  className="str-btn del_btn" alt="delete"src={delBtn}/>
                        </div>
                        <button className={fav ? 'unfavourite-btn':'favourite-btn'}>
                        {fav ? 'unfavourite-btn':'favourite-btn'} 
                        </button>
                        <button className={isIncart? "unfavourite-btn":"cart-btn"}
                         onClick={this.handleAddToCart}>{isIncart ? "Remove from Cart":"Add to cart"}</button>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}
}
export default MovieCart;