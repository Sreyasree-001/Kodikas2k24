/*import {motion} from 'framer-motion';
import {fadeIn} from '../app/variants.js';*/

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import background from '../../public/bg.jpg';
import logo from '../../public/logo.png';
import Navbar from './Components/Navbar/Navbar';
import AboutUs from './Components/AboutEvent';
import Contact from './Components/Contact';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main className="flex flex-col items-center justify-center min-h-screen py-10">
        <div className="absolute inset-0 -z-10">
          <Image src={background} alt="background image" className="w-full" width={1000} height={1000}/>
        </div>
        <Image src={logo} width={600} alt="logo" className='w-84'/>
        <p className="text-lg text-violet-100 mb-6">Organized by Computer Science & Engineering Department</p>
        <button className="border border-slate-300 hover:border-slate-400 text-white w-32 font-sans py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline w-1/2"
        >
          <Link href={'/#about-event'}>Explore Now</Link>
        </button>
      </main>
      <AboutUs/>
      <Contact/>
      <footer className="flex items-center justify-center py-4 border-t mt-10">
        <p className="text-gray-500">© All rights reserved.</p>
      </footer>
    </div>
  );
}