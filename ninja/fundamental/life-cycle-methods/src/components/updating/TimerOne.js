import React from 'react';
    
export default class Timer extends React.Component{
constructor(){
    super()
    this.state={
    count :0
    }
    console.log('TimerOne Constructor');
}

static getDerivedStateFromsProps(){
    console.log('Timer getDerivedStateFromsProps')
    return null;
}

shouldComponentUpdate(nextProps,nextState){
return true;
}

handleIncrease=()=>{
this.setState((prevState)=>{
    return{count:prevState.count+1}
})
}

render(){
    console.log("TimeOne render");
    return(
<>
<h1>Counter</h1>
<h2>{this.state.count}</h2>
<button onClick={this.handleIncrease}>Increase</button>
</>      
  )
}

componentDidMount(){
    console.log("TimerOne componentDidMount");
    console.log(" _________________________________");
}

getSnapshotBeforeUpdate(prevProps,prevState){
console.log("timer getSnapshotBeforeUpdate");
return null;
}

componentDidUpdate(){
    console.log("TimeOne componentDidUpdate ");
    console.log(" _________________________________");

}

}
