const AboutEvent = () => {
  return (
    <div
      id="about-event"
      className="px-4 py-16 mt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-5 lg:py-50 bg-[url('/bg2.jpg')] bg-cover bg-center bg-no-repeat h-full flex flex-col items-center justify-center"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-sm font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Kodikas Game Plan
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
          <span className="relative inline-block">
            <button className="px-8 z-2 py-4 bg-slate-950 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-zinc-700 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl mx-auto">
              ROUND DETAILS
            </button>
          </span>
        </h2>
        <p className="text-base text-gray-200 md:text-lg">
          Participants are requested to go through the round details.
        </p>
      </div>
      <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
        <div className="px-10 py-20 text-center lg:px-5 lg:py-10 xl:py-20 group relative bg-neutral-800 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-200 uppercase">
            19 September
          </p>
          <a
            href="/"
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
            title="Round 1"
          >
            Round 1
          </a>
          <br />
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Round 1 Details
          </a>
        </div>
        <div className="px-10 py-20 text-center lg:px-5 lg:py-10 xl:py-20 group relative bg-neutral-800 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
            20 Nov 2020
          </p>
          <a
            href="/"
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
            title="Well, the way they make shows is, they make one"
          >
            Well, the way they make shows is, they make one
          </a>
          <p className="max-w-xs mx-auto mb-2 text-gray-700">
            Some pilots get picked and become television programs. Some don't,
            become nothing.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Read more
          </a>
        </div>
        <div className="px-10 py-20 text-center lg:px-5 lg:py-10 xl:py-20 group relative bg-neutral-800 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
            20 Nov 2020
          </p>
          <a
            href="/"
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
            title="Pommy ipsum smeg head whizz morris himer due"
          >
            Pommy ipsum smeg head whizz morris himer due
          </a>
          <p className="max-w-xs mx-auto mb-2 text-gray-700">
            Taking the mick middle class bog roll bow ties are cool posh nosh
            off t'shop, stew and dumps.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutEvent;
