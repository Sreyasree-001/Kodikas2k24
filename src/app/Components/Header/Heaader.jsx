"use client"
const Header = () => {
  return (
    <div className="lg:mt-2 px-4 py-16 mx-auto  md:max-w-full  lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:mb-28
    bg-[url('/backpic.jpg')] bg-cover flex flex-col items-center justify-center">
      <div className="max-w-xl lg:max-w-2xl">
        <div className="flex flex-col items-center justify-center mb-16 text-center sm:mb-0">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <img src="logo.png"/>
            <p className="text-base text-gray-300 md:text-lg">
            Organized by Computer Science & Engineering Department
            </p>
          </div>
          <div>
            <a
              href="#about-event"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none"
            >
              Explore now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
