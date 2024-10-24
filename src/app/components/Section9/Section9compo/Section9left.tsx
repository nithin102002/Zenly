import React from 'react';

const Section9left = () => {
  return (
    <div className="h-[50%] w-full text-black lg:h-full lg:w-[50%] flex flex-col transition duration-300">
      <div className="h-[50%] w-full flex items-center justify-center">
        <div className="h-[80%] w-[80%] flex flex-col items-center justify-center">
          <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-center">
            DISCOVER YOUR FASHION STYLE HERE!
          </h1>
        </div>
      </div>
      <div className="h-[25%] w-full flex items-center justify-center">
        <div className="h-[80%] w-[80%] flex gap-8 items-center justify-center px-10">
          <div>
            <button className="text-sm bg-[#FEAB17] px-4 sm:px-6 py-2 sm:py-3 rounded md:text-lg lg:text-2xl font-bold">
              Our Mission
            </button>
          </div>
        </div>
      </div>
      <div className="h-[25%] w-full flex items-center justify-center">
        <div className="bg-slate-300 h-[80%] w-[80%] flex gap-8 items-center justify-start px-10">
          <div>
            <h3 className="text-xs sm:text-base md:text-lg lg:text-xl font-bold">
              "Deliver stylish garments crafted from premium materials for every occasion."
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section9left;
