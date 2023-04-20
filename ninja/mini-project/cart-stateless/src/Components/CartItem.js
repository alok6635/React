import { useState } from "react";

const CartItem = (props) => {
  const {img,title,price,qty} = props.getProduct;
  return (
    <div>
      <div><img  className="posterImg" style={styles.posterImg} src={img}/></div>
      <div className="right-block" style={styles.rightBlock}>
        <div>{title}</div>
        <div>Rs:{price}</div>
        <div>Qty:{qty}</div>
        <div>
        <img  src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" className="icons" style={styles.icons}/>
        <img src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" className="icons" style={styles.icons} />
        <img src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" className="icons" style={styles.icons} />
        </div>
      </div>
    </div>
  );
};
const styles = {
 posterImg: {
    height: 120,
    width: 120,
    borderRadius: 10,
  },
 rightBlock: {
    fontSize: 18,
    fontWeight: 700,
    color: "blue",
    textTransform: "upperCase",
  },
icons:{
    width:15,
    height:15,
    margin:6
  }
}
export default CartItem;
