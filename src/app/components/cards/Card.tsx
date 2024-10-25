"use client";
import React, { useState } from 'react';

const Card = ({ title, image, hoverImage, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group rounded-lg shadow-lg overflow-hidden m-4 flex flex-col max-w-sm mx-auto transition-shadow duration-200 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-64 transition-transform duration-300 ease-in-out">
        <img
          src={isHovered ? hoverImage.src : image.src}
          alt={title}
          className="w-full h-full object-cover transition-opacity duration-200 ease-in-out"
        />
      </div>
      <div
        className={`relative flex flex-col justify-center items-start p-3 transition-colors duration-200 ease-in-out ${
          isHovered ? 'bg-[#A28497] text-white' : 'bg-[#f3f3f3] text-black'
        } w-full`}
      >
        <h3 className="text-base md:text-lg lg:text-xl font-bold">
          {title}
        </h3>
        <p className="text-sm md:text-base lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;