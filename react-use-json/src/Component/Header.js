import React from 'react'
import "./Header.css"

const Header = () => {
  return (
   <>
<header className='header flex space-between align-item'>
<a href='#' className='logo'>
<img src='img/logo.png' width="150px" height="100px"></img>
</a>
<ul className='flex'>
    <li><a href='#' className='active'>Mobile</a> </li>
    <li><a href='#'>Laptop</a> </li>
    <li><a href='#'>Audio</a> </li>
    <li><a href='#'>Home</a> </li>
    <li><a href='#'>Tv</a> </li>
</ul>
</header>

   </>
  )
}

export default Header
