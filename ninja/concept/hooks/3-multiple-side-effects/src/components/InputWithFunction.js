import { useState,useEffect } from "react";

export default function InputWithFunction(){
    const [name,setName] = useState("Harry");
    const [lastName,setLastname] = useState("singh");

    useEffect(()=>{
        document.title = name+" "+lastName;
           },[name,lastName]);
// get window width by useeffect-
           useEffect(()=> {
      const timer = setInterval(() => {
          console.log("Window-width: ",window.innerWidth);
        }, 2000);
        // return(()=>{clearInterval(timer)})
      }
 );
    return(
        <>
      <div className="wrapper">
          <form>
            <label>Name</label>
            <br />
            <input  onChange={(e)=>setName(e.target.value)} value={name}></input>
            <hr></hr>
            <label>Last Name</label>
            <br />
            <input onChange={(e)=>setLastname(e.target.value)} value={lastName}></input>
            <hr></hr>
          </form>
          <h2>Hello,{name+" "+lastName}</h2>
        </div>
        </>
        )
    }

