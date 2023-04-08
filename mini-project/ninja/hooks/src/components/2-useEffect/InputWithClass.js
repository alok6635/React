import React from "react";

export default class InputWithClass extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"Tony",
            lastName: "Stark",
        }
    }
    handleNameChange = (e) =>{
        this.setState({
            name: e.target.value
        })
    }
    handleLastnameChange = (e) =>{
        this.setState({
            lastName: e.target.value
        })
    }
    componentDidMount(){
        document.title = this.state.name+" "+this.state.lastName;        
    }
    componentDidUpdate(){
        document.title = this.state.name+" "+this.state.lastName; 
    }
    render(){
        return(
            <>
        <div className="wrapper">
          <form>
            <label>Name</label>
            <br />
            <input  onChange={this.handleNameChange} value={this.state.name}></input>
            <hr></hr>
            <label>Last Name</label>
            <br />
            <input onChange={this.handleLastnameChange} value={this.state.lastName}></input>
            <hr></hr>
          </form>
          <h2>Hello,{this.state.name + " " + this.state.lastName}</h2>
        </div>
            
            </>
        )
    }
}

