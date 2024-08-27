import Head from 'next/head';
import Image from 'next/image';

import Navbar from './Components/Navbar/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar/>
      
      
      <main className="bg-violet-800 flex flex-col items-center justify-center min-h-screen py-10">
        <h1 className="text-blue-50 text-4xl font-bold mb-4">Kodikas2K24</h1>
        <p className="text-lg text-violet-300 mb-6">Organized by CSE</p>
        <button
          onClick={'About Us'}
          className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-pink-300 hover:to-blue-50 text-white w-32 font-sans py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline w-1/2"
        >
          Explore Now
        </button>
      </main>

      <footer className="flex items-center justify-center py-4 border-t mt-10">
        <p className="text-gray-500">© All rights reserved.</p>
      </footer>
    </div>
  );
}
