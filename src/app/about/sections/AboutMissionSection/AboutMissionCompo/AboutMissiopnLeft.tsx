"use client";
import React, { useState } from 'react';

const AboutMissiopnLeft = () => {
  const [text, setText] = useState("Deliver stylish garments crafted from premium materials for every occasion.");
  const [selectedButton, setSelectedButton] = useState<keyof typeof textOptions>("mission"); // Specify as keyof typeof textOptions

  // Define text options for each button
  const textOptions: { [key: string]: string } = {
    mission: "Elegance stitch garments works is dedicated to crafting stylish, and high-quality apparel, setting new standards in the fashion industry",
    vision: "Elegance stitch envisions being an expert in fashion, synonymous with timeless style, innovation, and ethical excellence",
    motto: "Quality Dresses for Affordable Prices"
  };

  // Handler to update text and selected button
  const handleButtonClick = (type: keyof typeof textOptions) => { // Explicitly specify the type
    setText(textOptions[type]);
    setSelectedButton(type);
  };

  return (
    <div className="h-[50%] w-full text-black lg:h-full lg:w-[50%] flex flex-col transition duration-300 bg-[#F3F3F3] rounded-lg">
      <div className="h-[50%] w-full flex items-center justify-center">
        <div className="h-full w-full flex flex-col items-center justify-center">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center text-gray-800 leading-tight">
            DISCOVER YOUR FASHION STYLE HERE!
          </h1>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="h-[25%] w-full flex items-center justify-center">
        <div className="h-[80%] w-full flex gap-2 items-center justify-center px-2 flex-wrap">
          {Object.keys(textOptions).map((key) => (
            <button 
              key={key}
              onClick={() => handleButtonClick(key as keyof typeof textOptions)}
              className={`text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-1 sm:py-2 md:py-2 lg:py-3 rounded font-semibold transition duration-300
                ${selectedButton === key ? "bg-yellow-500 text-black" : "border-t-4 border-yellow-500 text-black bg-transparent"}`}>
              {`Our ${key.charAt(0).toUpperCase() + key.slice(1)}`}
            </button>
          ))}
        </div>
      </div>

      {/* Display Text Section */}
      <div className="h-[25%] w-full flex items-center justify-center">
        <div className="h-[80%] w-[80%] flex items-center justify-start px-4 transition-transform duration-300 hover:scale-105">
          <h3 className="text-xs sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 italic">
            {text}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutMissiopnLeft;

AboutMissiopnLeft