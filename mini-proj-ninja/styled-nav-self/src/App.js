import React from 'react';
import Nav from './styledNavbar/Nav';
import MiPhones from './data/MiPhones';
import data from './data/data.json';
import {ButtonWrap} from './styledNavbar/Nav';

const App = () => {
  return (
    <>
      <Nav/>
      <MiPhones miList={data.miPhones} />
      <ButtonWrap/>
    </>
  )
}

export default App
