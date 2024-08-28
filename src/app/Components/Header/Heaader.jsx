"use client"
const Header = () => {
  return (
    <div className="lg:mt-2 px-4 py-16 mx-auto  md:max-w-full  lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:mb-28
    bg-[url('/homeback.jpg')] bg-cover flex flex-col items-center justify-center">
      <div className="max-w-xl lg:max-w-2xl">
        <div className="flex flex-col items-center justify-center mb-16 text-center sm:mb-0">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <img src="logo.png"/>
            <p className="text-base text-gray-300 md:text-lg">
            Organized by Computer Science & Engineering Department
            </p>
          </div>
          <div>
            <button className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-2 group">
            <a href="#about-event">
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-zinc-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-zinc-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-zinc-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
              Click Here
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">Explore!</span>
            </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
