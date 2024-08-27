import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
   <nav className='container'>
    <img src="./public/kodikas.png" alt="logo" className='logo'/>
    <ul>
        <li>Home</li>
        <li>Register</li>
        <li>Login</li>
        <li>About Us</li>
        <li><button className='btn'>Contact Us</button></li>
    </ul>
   </nav>
  );
}

export default Navbar;
