import React from 'react';

const HomeSectionLeft = () => {
  return (
    <div className="flex flex-col justify-start md:w-1/2 p-6 md:p-8 lg:p-10 gap-8">
      <div className="mb-4"> 
        <h1 className="text-3xl font-teko  tracking-wide sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          Fill your Wardrobe with Zenly!
        </h1>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img 
          src="https://images.pexels.com/photos/5242808/pexels-photo-5242808.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Stylish pieces"
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-lg shadow-md object-cover" 
        />
        <p className="text-lg font-teko  tracking-wide sm:text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed">
          Elevate your daily wardrobe with comfortable, stylish pieces designed for effortless living.
        </p>
      </div>

      <div className="mt-4">
        <p className="text-xs font-rubik sm:text-sm uppercase font-semibold text-gray-600 mb-1">Customer Support Satisfaction</p> 
        <div className="w-full bg-gray-300 h-2 rounded-full">
          <div className="w-[99%] bg-orange-500 h-full rounded-full"></div>
        </div>
        <p className="text-right font-rubik text-xs sm:text-sm mt-1 font-medium text-gray-700">99%</p> 
      </div>
    </div>
  );
}

export default HomeSectionLeft;
