 import CartItem from './CartItem';

const cartList = () => {
   const products=[
    {
        title: 'Watch',
        price: 99,
        qty: 1,
        img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d3Jpc3QlMjB3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        id: 1,
    },
    {
        title: 'Phone',
        price: 999,
        qty: 10,
        img: 'https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        id: 2,
    },
    {
        title: 'Laptop',
        price: 9999,
        qty: 4,
        img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        id: 3,
    }
]
  return (
      <>
      {
        products.map((product) => {
          return (
            <CartItem
              getProduct={product}
            />
          )
        })
        }
      </>
  )
}
export default cartList;
