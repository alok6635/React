import React from "react";
import "./cartItem.css";

export default class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Phone",
      qty: 5,
      prices: 5999,
    };
  }

  render() {
    const { prices, title, qty } = this.state;
    return (
      <>
      <h5>Class based Component-</h5>
 <div>
        <div className="cart_item">
          <div className="img_cover">
            <img style={styles.image} />
          </div>
          <div className="cart_data">
            <div style={{ fontSize: 25, color:"red"}}>{qty}</div>
          <div className="price" style={styles.price}>{prices}</div>
            <div className="title" style={styles.title}>{title}</div>
            <div className="item_actions">
              <img
                alt="Increase"
                src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                className="card_icons"
              />
              <img
                alt="decrease"
                src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                className="card_icons"
              />
              <img
                alt="delete"
                src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                className="card_icons"
              />
            </div>
          </div>
        </div>
      </div>
      </>
     
    );
  }
}

const styles = {
  image: {
    height: 150,
    width: 150,
    borderRadius: 15,
    background: "blue",
    border: " 2px soild red",
  },
  title:{
    fontSize:25,
    fontWeight:900,
    color:"red",
  },
  price:{
    fontSize:20,
    fontWeight:900,
    color:"red",
  }
};
