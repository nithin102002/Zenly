import React from 'react';
import Image from "next/image";
import image1 from '../assets/images1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const HomeSection6Top = ({ onImageClick }) => {
  const images = [image1, image2, image3];

  return (
    <div className="flex flex-wrap justify-evenly gap-4 md:gap-2 lg:gap-1">
      {images.map((src, index) => (
        <div key={index} className="w-full md:w-1/3 lg:w-1/4">
          <Image
            src={src}
            alt={`Top Image ${index + 1}`}
            className="grayscale hover:grayscale-0 transition duration-300 cursor-pointer w-full h-auto"
            onClick={() => onImageClick(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default HomeSection6Top;
