'use client';

import { useState, useEffect } from 'react';

export default function Comittees() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const committeeMembers = [
    {
      name: 'Aditya Vardhan Rai',
      image: '/Committee/AVR.jpg',
      year: '4th Year CSE',
    },
    {
      name: 'Ahona Bose',
      image: '/Committee/AhBo.jpg',
      year: '2nd Year CSE',
    },
    {
      name: 'Anirban Chakraborty',
      image: '/Committee/AC.jpg',
      year: '3rd Year CSE-AIML',
    },
    {
      name: 'Ankita Banerjee',
      image: '/Committee/AB.jpg',
      year: '3rd Year CSE-DS',
    },
    {
      name: 'Anwesha Laha',
      image: '/Committee/AnL.jpg',
      year: '4th Year CSE',
    },
    {
      name: 'Argha Kamal Saha',
      image: '/Committee/AKS.jpg',
      year: '2nd Year CSE',
    },
    {
      name: 'Arijit Kumar Roy',
      image: '/Committee/AKR.jpg',
      year: '2nd Year CSE',
    },
    {
      name: 'Ariyen SK',
      image: '/Committee/ASK.jpg',
      year: '3rd Year CSE-DS',
    },
    {
      name: 'Arkaprabha Laha',
      image: '/Committee/Arl.jpg',
      year: '4th Year CSE',
    },
    {
      name: 'Khushi Shaw',
      image: '/Committee/KS.jpg',
      year: '4th Year CSE-DS',
    },
    {
      name: 'Krittika Choudhuri',
      image: '/Committee/KC.jpg',
      year: '3rd Year CSE-AIML',
    },
    {
      name: 'Mahika Thakur',
      image: '/Committee/MT.jpg',
      year: '4th Year CSE',
    },
    {
      name: 'Meghana Choudhary',
      image: '/Committee/MC.jpg',
      year: '4th Year CSE',
    },
    {
      name: 'Monojit Das',
      image: '/Committee/MD.jpg',
      year: '3rd Year CSE-AIML',
    },
    {
      name: 'Risob Chatterjee',
      image: '/Committee/RC.jpg',
      year: '2nd Year CSE',
    },
    {
      name: 'Rupsa Nandy',
      image: '/Committee/RN.jpeg',
      year: '4th Year CSE',
    },
    {
      name: 'Sanchari Karati',
      image: '/Committee/SK.jpg',
      year: '3rd Year CSE',
    },
    {
      name: 'Sayantika Nayak',
      image: '/Committee/SN.jpg',
      year: '2nd Year CSE-DS',
    },
    {
      name: 'Sidhhartha Shaw',
      image: '/Committee/SS.jpg',
      year: '4th Year CSE-DS',
    },
    {
      name: 'Sreejeeta Dutta',
      image: '/Committee/SD.jpg',
      year: '4th Year CSE',
    },
    {
      name: 'Sreyasree Sasmal',
      image: '/Committee/ShSa.jpeg',
      year: '2nd Year CSE',
    },
    {
      name: 'Subhamoy Kundu Poddar',
      image: '/Committee/SKP.jpg',
      year: '4th Year CSE',
    },
    // Add more members here...
  ];

  // Duplicate the array to create an infinite loop effect
  const extendedMembers = [...committeeMembers, ...committeeMembers, ...committeeMembers, ...committeeMembers, ...committeeMembers, ...committeeMembers];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % committeeMembers.length);
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(intervalId);
  }, [committeeMembers.length]);

  return (
    <div id="committee" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 lg:max-w-xl lg:text-center">
        <p className="group group-hover:before:duration-500 lg:text group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
          CORE TEAM
        </p>
        <br></br>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex w-full transition-transform duration-1000" style={{ transform: `translateX(-${(currentIndex + 1) * 100}%)` }}>
          {extendedMembers.map((member, index) => (
            <div
              key={index}
              className="flex-none w-1/4 px-2 flex flex-col items-center"
            >
              <img
                className="object-cover w-32 h-32 mb-2 rounded-full shadow"
                src={member.image}
                alt="Person"
              />
              <div className="flex flex-col items-center">
                <p className="text-lg text-gray-50 font-bold">{member.name}</p>
                <p className="text-sm text-gray-300">{member.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
