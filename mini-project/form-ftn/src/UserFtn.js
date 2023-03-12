import React,{useState} from 'react'

export default function UserFtn() {
 const initialState = {
    username:"",
    password:""
 }
 const[user, setUser] = useState(initialState);
console.log("user", user);

 const handleOnchange =(e)=>{
    setUser((prevState)=>({...prevState, [e.target.name]:e.target.value}))
 }
  return (
    <>
    <h1>User Input in function based -</h1>
      <form>
      <h2>username:{user.username}</h2>
      <input type="text" placeholder="username" name="username" onChange={handleOnchange} ></input>
      <h2>password:{user.password}</h2>
      <input type="password" placeholder="password" name="password" onChange={handleOnchange} ></input>
      </form>
    </>
  )
}
