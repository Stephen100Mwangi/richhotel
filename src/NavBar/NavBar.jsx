import React, { useState } from 'react'
import './NavBar.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
const NavBar = () => {
    const [toggleMenu,setTogglemenu] = useState(false);
  return (
    <div className='app__navbar'>
        <div className="app__navbar-logo">
            {/* <img src="images/logo.png" alt="applogo" /> */}
            <h1>E🥂TE🍗Y</h1>
        </div>
        <ul className='app_navbar-links'>
            <li className='p_open'><a href="#home">Home</a></li>
            <li className='p_open'><a href="#about">About</a></li>
            <li className='p_open'><a href="#menu">Menu</a></li>
            <li className='p_open'><a href="#awards">Awards</a></li>
            <li className='p_open'><a href="#contact">Contacts</a></li>
        </ul>
        <div className="app__navbar-login">
            <a href="#login" className='p_open'>Log In / Register</a>
            <div></div>
            <a href="/" className='p_open'>Book Table</a>
        </div>
        <div className="app__navbar-smallscreen">
            <GiHamburgerMenu onClick={()=>setTogglemenu(true)}/>
            {toggleMenu && ( <div className='app__navbar-smallscreen_overlay'>
               <MdOutlineRestaurantMenu className='app__navbar-smallscreen_overlay-close' onClick={()=>setTogglemenu(false)}></MdOutlineRestaurantMenu>
               <ul className='app_navbar-smallscreen-links'>
                <li className='p_open'><a href="#home">Home</a></li>
                <li className='p_open'><a href="#about">About</a></li>
                <li className='p_open'><a href="#home">Menu</a></li>
                <li className='p_open'><a href="#home">Awards</a></li>
                <li className='p_open'><a href="#contact">Contacts</a></li>
            </ul>
            </div>)}
           
           
        </div>
     
    </div>
  )
}

export default NavBar
