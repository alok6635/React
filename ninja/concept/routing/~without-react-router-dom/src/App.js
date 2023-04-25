import { useState } from 'react';
import NavBar from './Components/NavBar';
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";

function App() {

const[page,setPage]=useState("home");
  return (
    <>
<NavBar setPage={setPage}/>
{page === "home" && <Home/> }
{page === "about" && <About/> }
{page === "items" && <Items/> }
    </>
  );
}
export default App;
