"use client"
import { useState } from "react";

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:bg-gray-900 md:bg-opacity-70 z-50">
      <div className="px-4 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-12 lg:py-2">
        <div className="relative flex items-center md:justify-center">
          <ul className="flex items-center hidden space-x-8 md:flex">
            <li>
              <a
                href="/"
                aria-label="Home"
                title="Home"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
               Home
              </a>
            </li>
            <li>
              <a
                href="/#about-event"
                aria-label="About Event"
                title="About Event"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                About event
              </a>
            </li>
            <li>
              <a
                href="/#gallery"
                aria-label="Gallery"
                title="Gallery"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="/#committee"
                aria-label="Committee"
                title="Committee"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="/#sponsors"
                aria-label="Sponsors"
                title="Sponsors"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Our Sponsors
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                aria-label="Contact Us"
                title="Contact Us"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                href="/status"
                aria-label="Team Status"
                title="Team Status"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Team status 
              </a>
            </li>
            <li>
              <a
                href="/register"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Register"
                title="Register"
              >
                Register
              </a>
            </li>
          </ul>
          <div className="md:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 bg-white rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-200" viewBox="0 0 24 24">
                <path
                  fill="black"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="black"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="black"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-screen">
                <div className="p-4 w-11/12 mr-5 bg-black border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="/"
                          aria-label="Home"
                          title="Home"
                          className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                         Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="/#about-event"
                          aria-label="About Event"
                          title="About Event"
                          className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About event
                        </a>
                      </li>
                      <li>
                        <a
                          href="/#gallery"
                          aria-label="Gallery"
                          title="Gallery"
                          className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Gallery
                        </a>
                      </li>
                      <li>
                        <a
                          href="/#committee"
                          aria-label="Committee"
                          title="Committee"
                          className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Our Team
                        </a>
                      </li>
                      <li>
                        <a
                          href="/#sponsors"
                          aria-label="Sponsors"
                          title="Sponsors"
                          className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Our Sponsors
                        </a>
                      </li>
                      <li>
                        <a
                          href="/#contact"
                          aria-label="Contact Us"
                          title="Contact Us"
                          className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Contact us
                        </a>
                      </li>
                      <li>
                        <a
                          href="/status"
                          aria-label="Team Status"
                          title="Team Status"
                          className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Team status
                        </a>
                      </li>
                      <li>
                        <a
                          href="/register"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-gray-300 hover:bg-deep-gray-300 focus:shadow-outline focus:outline-none"
                          aria-label="Register"
                          title="Register"
                        >
                          Register
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
