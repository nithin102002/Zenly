import React from 'react';
import Image from "next/image";
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';

// Define the props type for the component
interface AboutClientBottomProps {
  onImageClick: (index: number) => void; // Explicitly specify the type for onImageClick
}

const AboutClientBottom: React.FC<AboutClientBottomProps> = ({ onImageClick }) => {
  const images = [image4, image5, image6];

  return (
    <div className="flex flex-wrap justify-evenly gap-4 mt-4 md:gap-2 lg:gap-1">
      {images.map((src, index) => (
        <div key={index} className="w-full md:w-1/3 lg:w-1/4">
          <Image
            src={src}
            alt={`Bottom Image ${index + 4}`}
            className="grayscale hover:grayscale-0 transition duration-300 cursor-pointer w-full h-auto"
            onClick={() => onImageClick(index + 3)}
          />
        </div>
      ))}
    </div>
  );
};

export default AboutClientBottom;
