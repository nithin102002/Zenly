import React from 'react';
import Image from 'next/image';
import image1 from '../../../../../../public/assets/mens-wear.jpg';
import image2 from '../../../../../../public/assets/womens-wear.jpg';

interface HomeSection2TopProps {
  visibleIndex: number;
}

const HomeSection2Top: React.FC<HomeSection2TopProps> = ({ visibleIndex }) => {
  const images = [
    {
      src: image1,
      alt: "Men's Wear",
      title: "Men's Wear",
      description: "Sophisticated collection for modern gentlemen",
    },
    {
      src: image2,
      alt: "Women's Wear",
      title: "Women's Wear",
      description: "Elegant designs for the modern woman",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 px-4 lg:px-16 py-8">
      {/* Left Part */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-6xl font-bold font-teko tracking-wide mb-4">
          DISCOVER TIMELESS FASHION CRAFTED WITH CARE FOR YOU.
        </h2>
        <p className="text-xl font-normal font-rubik">
          We are committed to providing our customers with exceptional designs
          and quality garments.
        </p>
      </div>

      {/* Right Part */}
      <div className="lg:w-1/2 flex flex-col lg:flex-row gap-6">
        {images.map((img, index) => (
          <div key={index} className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-80 overflow-hidden">
            <Image src={img.src} alt={img.alt} className="w-full h-full object-cover transition duration-300" />
            <div
              className={`absolute bottom-4 left-4 right-4 bg-[#171717] text-white p-4 flex flex-col justify-center items-center transition-all duration-500 ${
                visibleIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
            >
              <p className="font-medium font-teko tracking-wide">{img.title}</p>
              <hr className="w-14 border-t-2 border-[#FFD700]" />
              <p className="text-sm font-teko tracking-wide">{img.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection2Top;
