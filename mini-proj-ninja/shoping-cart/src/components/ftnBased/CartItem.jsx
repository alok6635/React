import { useState } from 'react';
import './cartItem.css'

const CartItem=()=>{
    const qty =1;
    const Price =700;
    const title = 'Mobile';

  

    return(
        
        <>
<h5>functional based component -</h5>
<div>
<div className='cart'>  
<div className='card_img'>
<img style={styles.image}/>
</div>
<div className='card_detils'>
<div>{qty}</div>
<div>{Price}</div>
<div>{title}</div>
    <div className='item_actions'>
    <img  alt="Increase" src="https://cdn-icons-png.flaticon.com/128/992/992651.png"/>
    <img alt="decrease" src="https://cdn-icons-png.flaticon.com/128/992/992683.png"/>
    <img alt="delete" src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"/>
    </div>
</div>
</div>
        </div>
        </>
       
    )
}
const styles ={
    image:{
        background:"pink",
        width:"150px",
        height:"150px",
        borderRadius:"10px",
        marginRight:"10px",
    }
}
export default CartItem;