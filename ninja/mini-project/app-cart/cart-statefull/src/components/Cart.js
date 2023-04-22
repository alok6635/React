import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          incImg:'https://cdn-icons-png.flaticon.com/128/2997/2997933.png',
          decImg:'https://cdn-icons-png.flaticon.com/128/2801/2801932.png',
          delImg:'https://cdn-icons-png.flaticon.com/128/1214/1214428.png',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          incImg:'https://cdn-icons-png.flaticon.com/128/2997/2997933.png',
          decImg:'https://cdn-icons-png.flaticon.com/128/2801/2801932.png',
          delImg:'https://cdn-icons-png.flaticon.com/128/1214/1214428.png',
          id: 2,
          
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: 'https://plus.unsplash.com/premium_photo-1676998931123-75789162f170?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          incImg:'https://cdn-icons-png.flaticon.com/128/2997/2997933.png',
          decImg:'https://cdn-icons-png.flaticon.com/128/2801/2801932.png',
          delImg:'https://cdn-icons-png.flaticon.com/128/1214/1214428.png',
          id: 3,
          
        }
      ]
    }
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products
    })
  }
  render () {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
            />
          )
        }
        )}
      </div>
    );
  }
}

export default Cart;