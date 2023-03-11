import React from 'react'
import './App.css';
import Header from './component/Header.js';
import About from "./component/About";
import Clients from "./component/Clients";
import Menu from "./component/Menu";
import Prices from "./component/Prices";
import Shop from "./component/Shop";

function App() {
  return (
  <>
<Header/>
<About/>
<Clients />
<Menu/>
<Prices/>
<Shop/>
  </>
  );
}

export default App;
