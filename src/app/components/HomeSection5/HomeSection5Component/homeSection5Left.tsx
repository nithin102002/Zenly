import React from 'react';

const HomeSectionLeft = () => {
  return (
    <div className="flex flex-col justify-items-stretch md:w-1/2 pr-4 gap-8 justify-start">
      <div className="mb-2"> 
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Fill your Wardrobe with Zenly!
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row items-start gap-4 mb-2"> 
        <img 
          src="https://images.pexels.com/photos/5242808/pexels-photo-5242808.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Stylish pieces"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover" 
        />
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-0">
          Elevate your Daily Wardrobe with comfortable, stylish pieces designed for effortless living.
        </p>
      </div>
      <div>
        <p className="text-sm uppercase mb-1">Support of Zenly to customer</p> 
        <div className="w-full bg-gray-700 h-2 rounded-full">
          <div className="w-[99%] bg-orange-500 h-full rounded-full"></div>
        </div>
        <p className="text-right mt-1">99%</p> 
      </div>
    </div>
  );
}

export default HomeSectionLeft;
