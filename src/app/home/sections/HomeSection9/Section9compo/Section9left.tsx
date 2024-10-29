"use client";
import React, { useState } from 'react';

const Section9left = () => {
  const [text, setText] = useState("Deliver stylish, contemporary garments crafted from premium materials for every occasion.");
  
  // Define text options for each button
  const textOptions: { [key: string]: string } = {
    mission: "Elegance stitch garments works is dedicated to crafting stylish, and high-quality apparel, setting new standards in the fashion industry",
    vision: "Elegance stitch envisions being an expert in fashion, synonymous with timeless style, innovation, and ethical excellence",
    motto: "Quality Dresses for Affordable Prices"
  };

  // Handler to update text when button is clicked
  const handleButtonClick = (type: keyof typeof textOptions) => {
    setText(textOptions[type]);
  };

  return (
    <div className="h-[50%] w-full text-black lg:h-full lg:w-[50%] flex flex-col transition duration-300 bg-[#F3F3F3] rounded-lg">
      <div className="flex-1 w-full flex items-center justify-center mobile:h-[33.33%]"> {/* Mobile height adjusted */}
        <div className="w-full flex flex-col items-center justify-center p-2"> {/* Padding for mobile */}
          <h1 className="text-xl font-teko  tracking-wide sm:text-3xl md:text-4xl lg:text-7xl font-bold text-center text-gray-800 leading-tight mobile:text-2xl">
            DISCOVER YOUR FASHION STYLE HERE!
          </h1>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex-1 w-full flex items-center justify-center mobile:h-[33.33%]"> {/* Mobile height adjusted */}
        <div className="h-[80%] w-full flex gap-2 items-center justify-center p-2 flex-wrap"> {/* Padding for mobile */}
          {Object.keys(textOptions).map((key) => (
            <button 
              key={key}
              onClick={() => handleButtonClick(key as keyof typeof textOptions)}
              className={`text-xs font-rubik mobile:text-base sm:text-sm md:text-base lg:text-lg px-4 mobile:px-6 sm:px-6 md:px-8 lg:px-10 py-1 mobile:py-3 sm:py-2 md:py-2 lg:py-3 rounded font-semibold transition duration-300
                border-t-4 border-yellow-500 bg-yellow-500 text-black`}>
              {`Our ${key.charAt(0).toUpperCase() + key.slice(1)}`}
            </button>
          ))}
        </div>
      </div>

      {/* Display Text Section */}
      <div className="flex-1 w-full flex items-center justify-center mobile:h-[33.33%]"> {/* Mobile height adjusted */}
        <div className="h-[80%] w-[80%] flex items-center justify-start p-2 transition-transform duration-300 hover:scale-105"> {/* Padding for mobile */}
          <h3 className="text-xs font-rubik  mobile:text-base sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 italic">
            {text}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Section9left;
