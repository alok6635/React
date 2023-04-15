import React from 'react';
class ComponentsA extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "Mounting phase(constructor, static getDerivedStateFromProps, componentDidMount, render)",
    };
    console.log("ComponentA Consutructor");
  }
 static getDerivedStateFromProps() {
    console.log("ComponentA getDerivedStateFormProps");
    return null;
  }
componentDidMount(){
    console.log("ComponentA componentDidMount");
    return null;
}

  render() {
    console.log("ComponentA Render");
    return <h3>{this.state.name}</h3>;
  }

}

export default ComponentsA;
