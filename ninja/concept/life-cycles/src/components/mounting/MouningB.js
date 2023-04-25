import React from 'react';
class MouningB extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "MouningB",
    };
    console.log("MouningB Consutructor");
  }
 static getDerivedStateFromProps() {
    console.log("MouningB getDerivedStateFormProps");
    return null;
  }
componentDidMount(){
    console.log("MouningB componentDidMount");
    return null;
}
  render() {
    console.log("MouningB Render");
    return <h3>{this.state.name}</h3>;
  }
}

export default MouningB;
