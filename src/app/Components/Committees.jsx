"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./css/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
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
      image: '/Committee/RN.jpg',
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
      image: '/Committee/ShSa.jpg',
      year: '2nd Year CSE',
    },
    {
      name: 'Subhamoy Kundu Poddar',
      image: '/Committee/SKP.jpg',
      year: '4th Year CSE',
    },
];
const Committees = () => {
  return (
    <div>
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-500 uppercase rounded-full bg-teal-accent-400">
          Discover Our Team
        </p>
        <p className="text-base text-gray-500 md:text-lg">
          Meet The Team Behind the Dream.
        </p>
      </div>
      <div className="parent">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={1500}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {sliderImageUrl.map((member, index) => {
            return (
              <div>
                  <div className="slider" key={index}>
                      <img src={member.image} alt="Person" />
                  </div>
                  <div className="flex flex-col sm:text-center">
                      <p className="text-lg font-bold text-gray-200">{member.name}</p>
                      <p className="mb-5 text-xs text-stone-200">{member.year}</p>
                  </div>
              </div>
              
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
export default Committees;
