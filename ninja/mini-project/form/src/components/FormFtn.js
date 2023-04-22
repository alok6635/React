import React, { useState } from 'react';

const FormFtn = () => {
    const [name, setName] = useState("");
    const[lastName, setlastName] =useState("");
//Change name-
 const  handleName=(e)=>{
        setName(e.target.value);
    }
  return (
    <div className="wrapper">
    <h5>function based - </h5>
      <form>
        <label>Name</label>
        <br/>
        <input value={name} onChange={handleName}></input>
        <hr></hr>
        <label>Last Name</label>
        <br/>
        <hr></hr>
        <input value={lastName} onChange={(e)=>setlastName(e.target.value)}></input>
      </form>
      <h2>Hello {name + " " + lastName}</h2>
    </div>
  )
}
export default FormFtn;

