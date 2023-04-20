import React from "react";

class CartItem extends React.Component {
  render() {
    console.log('render')
    const {img, price, title, qty,incImg,decImg,delImg} = this.props.product;
    const {product,onIncreaseQuantity} = this.props;
    return (
      <div className="cart-item" style={styles.cartItem}>
        <div><img src={img} className="poster" style={styles.poster}/></div>
        <div className="right-block" style={styles.rightBlock}>
          <div>{title}</div>
          <div>Rs {price} </div>
          <div>Qty: {qty} </div>
          <div className="cart-item-actions">
          <img
              alt="increase"
              className="action-icons" style={styles.actionIcons}
              src={incImg}
              onClick={() => this.props.onIncreaseQuantity(this.props.product)}
            />
            <img
              alt="decrease"
              className="action-icons" style={styles.actionIcons}
              src={decImg}
            />
            <img
              alt="delete"
              className="action-icons" style={styles.actionIcons}
              src={delImg}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
  rightBlock:{
    fontSize:18,
    fontWeight:600,
    color:"black",
    display: "inline-block",
    textAlign: "center",
   
  },
  actionIcons:{
    height: 15,
    width: 15,
    marginRight:10,
    marginTop:10,
  },
  cartItem:{
    margin:20
  },
  poster:{
    width:120,
    height:120,
  }

};

export default CartItem;
