import React, {useState} from 'react'

export default function User() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log("username",username)
  console.log("password",password)

const handleUsername = (e) =>{
  setUsername(e.target.value);
}

const handlePassword = (e) =>{
  setPassword(e.target.value);
}

  return (
    <>
    <div>
      <div>
      <strong>Username:{username}</strong>
      <form>
          <input type="text" placeholder="username" name="username" onChange={handleUsername} ></input>
          </form>
          </div>
          <div>
        <strong>Password:{password}</strong>
        <form>
        <input type="password" placeholder="password" name="password" onChange={handlePassword} ></input>
        </form>
      </div>
      </div>

    </>
      
  )
}
