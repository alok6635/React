import React from 'react';

class LifeCycleMethod extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentA",
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
    return(
      <>
     <h2>{this.state.name}
     </h2>

      </>
    )  
}

}

export default LifeCycleMethod;
