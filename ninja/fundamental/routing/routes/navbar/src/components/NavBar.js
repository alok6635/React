import {Link,NavLink, Outlet} from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <div className='nav'>
    <NavLink style={({isActive})=> isActive ? {color:"red"}:{color:"green"}} to='/'><h4>Home</h4></NavLink>
    <NavLink style={({isActive})=> isActive ? {color:"red"}:{color:"green"}} to='/about'><h4>About</h4></NavLink>
    <NavLink style={({isActive})=> isActive ? {color:"red"}:{color:"green"}} to='/items'><h4>Items</h4></NavLink>
   </div>
   <Outlet/>
   </>
  )
}

export default NavBar;
