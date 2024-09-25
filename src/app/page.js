/*import {motion} from 'framer-motion';
import {fadeIn} from '../app/variants.js';*/

import Navbar from './Components/Header/Navbar/Navbar';
import AboutUs from './Components/AboutEvent';
import Contact from './Components/Contact';
import Header from './Components/Header/Heaader';
import Gallery from './Components/Gallery';
import Comittees from './Components/Committees';
import Sponsors from './Components/Sponsors';
import Footer from './Components/Footer';

export default function Home() {
  return (
    <div className="bg-black flex flex-col">
      <div className='fixed md:self-center z-10'><Navbar/></div>
      <div className=''>
        <Header/>
      </div>
        <AboutUs/>
        <Gallery/>
        <Comittees/>
        <Sponsors/>
        <Contact/>
        <Footer/>
    </div>
  );
}