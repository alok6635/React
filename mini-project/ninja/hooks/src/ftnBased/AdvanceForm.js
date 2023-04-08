import React,{useState} from 'react'

export default function AdvanceForm() {
 const initialState = {
    username:"",
    password:" ",
 }
 const[user, setUser] = useState(initialState);

 const handleOnchange =(e)=>{
    setUser((prevState)=>({...prevState, [e.target.name]:e.target.value}))
 }
  return (
    <>
      <div className="wrapper">
        <form>
          <label>Name</label>
          <br/>
          <input type="text" onChange={handleOnchange}></input>
          <hr></hr>
          <label>Last Name</label>
          <br/>
          <input type="password" onChange={handleOnchange}></input>
          <hr></hr>
        </form>
        {/* <h2>Hello,{username + " " + password}</h2> */}
      </div>
    </>
  )
}
// test
