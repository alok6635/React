import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
<footer>
<a href='#' className='footer_logo'>Alok</a>
<ul className='permalinks'>
<li> <a href='#'>Home</a></li>
<li> <a href='#About'>About</a></li>
<li> <a href='#Experiences'>Experiences</a></li>
<li> <a href='#Services'>Services</a></li>
<li> <a href='#Portfolio'>Portfolio</a></li>
<li> <a href='#Testimonials'>Testimonials</a></li>
<li> <a href='#Contact'>Contact</a></li>
</ul>

<div className='footer_socials'>
<a href='https://facebook.com'><BsFacebook/> </a>
<a href='https://instagram.com'><BsInstagram/></a>
<a href='https://twitter.com'><BsTwitter/></a>
</div>

<div className='footer_copyrirgt'>
  <small>&copy; React Tutorials. All rights reserved.</small>
</div>

</footer>
  )
}

export default Footer
