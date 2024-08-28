/*import {motion} from 'framer-motion';
import {fadeIn} from '../app/variants.js';*/

import Navbar from './Components/Header/Navbar/Navbar';
import AboutUs from './Components/AboutEvent';
import Contact from './Components/Contact';
import Header from './Components/Header/Heaader';

export default function Home() {
  return (
    <div className="bg-black flex flex-col">
      <div className='fixed md:self-center z-10'><Navbar/></div>
      <div className=''>
        <Header/>
        
        </div>
        <AboutUs/>
        <Contact/>
        
        <footer className="flex items-center justify-center py-4 border-t mt-10">
          <p className="text-gray-500">© All rights reserved.</p>
        </footer>
    </div>
  );
}