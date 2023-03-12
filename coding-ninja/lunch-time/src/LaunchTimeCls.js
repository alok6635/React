import React from "react";
// class type-
export default class LaunchTimeCls extends React.Component {
  render() {
    let time = new Date().getHours();

    return (
      <div>
        {time < 12 ? (
          <h1 style={{ color: "black", background: "yellow" }}>
            Breakfast Time
          </h1>
        ) : time >= 12 && time < 18 ? (
          <h1 style={{ color: "blue", background: "pink" }}> lunch time</h1>
        ) : time > 18 ? (
          <h1 style={{ color: "red", background: "black" }}>
            
            Dinner time
          </h1>
        ) : null}
      </div>
    );
  }
}


// function type-
export function LaunchTimeFtn (){
  let data = new Date().getHours();
  return(
    <div>
    {data < 12 ? <p style={{color:"black",background:"yellow"}}>Breakfast Time</p>
: data >= 12 && data < 18 ?  <p style={{color:"blue",background:"pink"}}>lunch time</p>
: data > 18 ? <p style={{color:"red", background: "black"}}> Dinner time</p> :null}
        </div>
)
}

