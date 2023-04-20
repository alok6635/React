import React from 'react';
import MouningB from './MouningB';

class MouningA extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "MouningA",
    };
    console.log("MouningA Consutructor");
  }
 static getDerivedStateFromProps() {
    console.log("MouningA getDerivedStateFormProps");
    return null;
  }
componentDidMount(){
    console.log("MouningA componentDidMount");
    return null;
}
  render() {
    console.log("MouningA Render");
    return(
      <>
     <h2>{this.state.name}
     </h2>
     <MouningB/>

      </>
    )  
}

}

export default MouningA;
