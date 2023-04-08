import React from "react";

class InputWithClsBased extends React.Component {
  constructor() {
    super();
    this.state = {
      name: " ",
      LastName: " ",
    };
  }

  handleName=(e)=> {
    this.setState({
      name: e.target.value,
    });
  }

  handleLastName=(e)=>{
    this.setState({
        LastName:e.target.value
    })
  }

  render() {
    return (
      <>
        <div className="wrapper">
      <h5>Class based - </h5>
          <form>
            <label>Name</label>
            <br />
            <input  onChange={this.handleName} value={this.state.name}></input>
            <hr></hr>
            <label>Last Name</label>
            <br />
            <input onChange={this.handleLastName} value={this.state.LastName}></input>
            <hr></hr>
          </form>
          <h2>Hello,{this.state.name + " " + this.state.LastName}</h2>
        </div>
      </>
    );
  }
}

export default InputWithClsBased;
