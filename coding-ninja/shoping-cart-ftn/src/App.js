import CartItem from './components/CartItem'

function App() {
let cardData =[
  {
    id:"e1",
    qty:1,
    price:700,
    title:"Mobile"
  },
  {
    id:'e2',
    qty:5,
    price:300,
    title:"Headphone"
  }
]



  return (
    <div className="App">
<CartItem  
qty={cardData[0].qty}
 price ={cardData[0].price}
  title ={cardData[0].title}/>

<CartItem  
qty={cardData[1].qty}
 price ={cardData[1].price}
  title ={cardData[1].title}/>
</div>
  );
}

export default App;
