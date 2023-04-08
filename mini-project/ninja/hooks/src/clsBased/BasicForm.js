import React from "react";

class BasicForm extends React.Component {
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

export default BasicForm;
