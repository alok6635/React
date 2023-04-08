import React from 'react'

const MovieCardFirst = () => {
    return (
        <div className="main">
        <div className="movie-card">
{/**Left section of Movie Card */}
          <div className="left">
            <img src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg" alt="poster"/>
          </div>
{/**Right section Movie Card */}
          <div className="right">
            <div className="title">Functional Based -</div>
            <div className="plot">When the menace known as the Joker wreaks havoc and chaos on the people of Gotham</div>
            <div className="price">Rs. 101</div>
{/* review section */}
            <div className="review">
              <div className="rating">6</div>
              <div className="star-dis">
             <img src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" className="dec_star"/>
             <img src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" className="star"/>
             <img src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" className="inc_star"/>
                <span className="starCount">5</span>
              </div>
                 <button className="favourite-btn">Favourite</button>
                  <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
        </div>
      );
}

export default MovieCardFirst;
