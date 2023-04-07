import { useState } from "react";

function App() {
const score=0;
const[data,setData]=useState(score);

function addOne(){
  setData(data + 1)
    console.log("data", data)
}
function addScore(num){
  setData(data +num)
}
function addWicket(){
  setData(data+1);
}
  return (
    <div className="App">
     <h2>Score:{data}</h2>
     <div>
      <button onClick={addOne}>1</button>
      <button  onClick={()=>addScore(3)}>2</button>
      <button onClick={addWicket}>Wicket</button>
     </div>
    </div>
  );
}

export default App;
