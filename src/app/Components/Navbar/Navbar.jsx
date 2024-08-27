/*import React from 'react';*/
import Image from 'next/image';
import "./Navbar.css";
import Link from 'next/link';

const Navbar = () => {
  return (
   <nav className='text-sm justify-end'>
    <ul>
        <li><button className="text-white w-24 font-sans py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-1/2">
          <Link href={'/'}>Home</Link></button></li>
          <li><button className="text-white w-24 font-sans py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-1/2">
          <Link href={'/#about-event'}>About Event</Link></button></li>
          <li><button className="text-white w-32 font-sans py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-1/2">
          <Link href={'/#contact'}>Contact Us</Link></button></li>
          <li><button className="text-white w-24 font-sans py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-1/2">
          <Link href={'/status'}>Team Status</Link></button></li>
        <li align="right"><button className='border border-slate-300 hover:border-slate-400 w-32 font-sans py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline w-1/2'>
        <Link href={'/register'}>Register</Link></button></li>
    </ul>
   </nav>
  );
}

export default Navbar;
