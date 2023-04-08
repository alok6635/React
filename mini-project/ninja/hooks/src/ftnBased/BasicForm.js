import React, { useState } from "react";

const BasicForm = () => {
  const [name, setName] = useState("Alok");
  const [lastName, setlastName] = useState("Kumar");

  const HandleLastName=(e)=>{
    setlastName(e.target.value);
  }

  return (
    <>
      <div className="wrapper">
        <form>
          <label>Name</label>
          <br />
          <input value={name} onChange={(e)=>setName(e.target.value)}></input>
          <hr></hr>
          <label>Last Name</label>
          <br />
          <input value={lastName} onChange={HandleLastName}></input>
          <hr></hr>
        </form>
        <h2>Hello,{name + " " + lastName}</h2>
      </div>
    </>
  );
  

};

export default BasicForm;
