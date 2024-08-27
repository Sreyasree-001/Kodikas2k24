/*import React from 'react';*/
import Image from 'next/image';
import "./Navbar.css";

const Navbar = () => {
  return (
   <nav className='text-sm justify-end'>
    
    <ul>
        <li><button onClick={'page.js'}
          className="text-white w-24 font-sans py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-1/2">
          Home</button></li>
          <li><button onClick={'Register.js'}
          className="text-white w-24 font-sans py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-1/2">
          Register</button></li>
          <li><button onClick={'Team Status.js'}
          className="text-white w-32 font-sans py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-1/2">
          Team Status</button></li>
          <li><button onClick={'About us.js'}
          className="text-white w-24 font-sans py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-1/2">
          About Us</button></li>
        <li align="right"><button className='border border-slate-300 hover:border-slate-400 w-32 font-sans py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline w-1/2'>
        Contact Us</button></li>
    </ul>
   </nav>
  );
}

export default Navbar;
