import React from 'react';

const Section9right = () => {
  return (
    <div className="h-[50%] w-full text-black lg:h-full lg:w-[50%] flex flex-col transition duration-300">
      <div className="h-[50%] w-full flex items-center justify-center">
        <div className="h-[80%] w-[80%] flex flex-col items-center justify-center">
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold text-center">
            Zenly brings you timeless pieces of designs and comfort to make every moment of your life special.
          </h1>
        </div>
      </div>
      <div className="h-[50%] w-full ml-1 flex items-center justify-center">
        <div className="h-full rounded-full w-[50%] flex items-center justify-center overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1604506847073-4a8e18e07d92?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D" 
            alt="" 
            className="object-cover w-full h-full" 
          />
        </div>
        <div className="h-full w-[50%] flex flex-col items-start justify-center px-4">
          <ul className="space-y-2">
            <li className='text-xs mb-2 sm:text-sm md:text-2xl font-bold break-words'>
              Timeless and elegant designs for every occasion
            </li>
            <li className='text-xs mb-2 sm:text-sm md:text-2xl font-bold break-words'>
              Exceptional designs and detailed work
            </li>
            <li className='text-xs mb-2 sm:text-sm md:text-2xl font-bold break-words'>
              Handpicked fabrics
            </li>
            <li className='text-xs mb-2 sm:text-sm md:text-2xl font-bold break-words'>
              Trending collections with a classic touch
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section9right;
