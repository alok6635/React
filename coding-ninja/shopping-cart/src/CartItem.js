import React from "react";
import './CartItem.css';

export default class CartItem extends React.Component {
    constructor(){
        super()
        this.state = {
               prices:999,
               title:'Mobile',
               qty:1,
               img: ''
        }

    
    }
    IncreaseQty =()=>{
      // this.state.qty =+ 1;
        console.log('this', this.state);
        this.setState({
          qty:this.state.qty =1
        })
    }

  render() {
    const{prices,title, qty}= this.state;
    return(
      <div>
        <h1>Class based Component -</h1>
        <div className="cart_item">
          <div className="img_cover">
            <img style={styles.image} />
          </div>
          <div className="cart_data">
            <div style= {{fontSize:25,color:"red"}}>{title}</div>
            <div style= {{color:"red",fontSize:25}}>{prices}</div>
            <div style= {{fontSize:25,color:"red"}}>{qty}</div>
            <div className="item_actions">
              <img alt="Increase" src="https://cdn-icons-png.flaticon.com/128/992/992651.png" className="card_icons"
                onClick={this.IncreaseQty}
              />
              <img alt="decrease" src="https://cdn-icons-png.flaticon.com/128/992/992683.png" className="card_icons"/>
              <img alt="delete" src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" className="card_icons"/>
            </div>
          </div>
        </div>
      </div>
    );
   
  }
}

const styles = {
    image: {
      height: 130,
      width: 130,
      borderRadius: 15,
      background:"blue",
      border:" 2px soild red"
    },
  };