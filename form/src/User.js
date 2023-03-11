import React,{useState} from 'react'

export default function User() {
 const initialState = {
    username:'',
    password:''
 }

 const[user, setUser] = useState(initialState);

console.log("user", user);

 const handleOnchange =(e)=>{
    setUser((prevState)=>({...prevState, [e.target.name]:e.target.value}))
 }

  return (
    <>
      <h1>username:{user.username}</h1>
      <h1>password:{user.password}</h1>
      <form>
      <input type="text" placeholder="username" name="username" onChange={handleOnchange} ></input>
      <input type="password" placeholder="password" name="password" onChange={handleOnchange} ></input>
      </form>
    </>
  )
}
