import React from 'react';

const Section9right = () => {
  return (
    <div className="h-[50%] w-full text-black lg:h-full lg:w-[50%] flex flex-col">
      <div className="h-[40%] w-full flex items-center justify-center">
        <div className="h-[80%] w-full flex flex-col items-center justify-center">
          <h1 className="text-[1.2rem] font-teko  tracking-wide sm:text-lg md:text-xl lg:text-2xl font-semibold text-center text-gray-800 leading-tight">
            Zenly brings you timeless pieces of designs and comfort to make every moment of your life special.
          </h1>
        </div>
      </div>
      <div className="h-[60%] w-full flex items-center justify-center">
        {/* Set height and width to be the same for a square and use rounded-full for circular shape */}
        <div className="h-[100%] w-[50%] flex items-center justify-center overflow-hidden shadow-md rounded-full">
          <img 
            src="/assets/n.jpg" 
            alt="Elegant clothing" 
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" 
          />
        </div>
        <div className="h-full w-[50%] flex flex-col items-start justify-center px-4">
          <ul className="space-y-2 ">
            <li className="text-sm font-teko  tracking-wide sm:text-base md:text-lg font-semibold text-gray-600 break-words flex items-center">
              <span className="text-yellow-500 mr-2">✓</span> 
              Timeless and elegant designs for every occasion
            </li>
            <li className="text-sm font-teko  tracking-wide sm:text-base md:text-lg font-semibold text-gray-600 break-words flex items-center">
              <span className="text-yellow-500 mr-2">✓</span> 
              Exceptional designs and detailed work
            </li>
            <li className="text-sm font-teko  tracking-wide sm:text-base md:text-lg font-semibold text-gray-600 break-words flex items-center">
              <span className="text-yellow-500 mr-2">✓</span> 
              Handpicked fabrics
            </li>
            <li className="text-sm font-teko  tracking-wide sm:text-base md:text-lg font-semibold text-gray-600 break-words flex items-center">
              <span className="text-yellow-500 mr-2">✓</span> 
              Trending collections with a classic touch
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section9right;
