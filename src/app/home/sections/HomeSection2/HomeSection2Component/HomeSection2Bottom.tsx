import React from 'react';
import Image from 'next/image';
import image3 from '../../../../../../public/assets/kids-wear.jpg';
import image4 from '../../../../../../public/assets/accessories.jpeg';
import image5 from '../../../../../../public/assets/uniform-wear.jpg';

interface HomeSection2BottomProps {
  visibleIndex: number;
  indexOffset: number;
}

const HomeSection2Bottom: React.FC<HomeSection2BottomProps> = ({ visibleIndex, indexOffset }) => {
  const images = [
    { src: image3, alt: "Kids' Wear", title: "Kids' Wear", description: "Comfortable and stylish clothing for children" },
    { src: image4, alt: "Accessories", title: "Accessories", description: "Hats, Footwear, and more" },
    { src: image5, alt: "Premium Uniforms", title: "Premium Uniforms", description: "Professional attire for every workplace" },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 px-4 lg:px-16 py-8">
      {images.map((img, index) => (
        <div key={index} className="relative w-full lg:w-1/3 h-80 overflow-hidden">
          <Image src={img.src} alt={img.alt} className="w-full h-full object-cover transition duration-300" />
          <div
            className={`absolute bottom-4 left-4 right-4 bg-[#171717] text-white p-4 flex flex-col justify-center items-center transition-all duration-500 ${
              visibleIndex === index + indexOffset ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <p className="font-medium font-teko tracking-wide">{img.title}</p>
            <hr className="w-14 border-t-2 border-[#FFD700]" />
            <p className="text-sm font-teko tracking-wide">{img.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeSection2Bottom;
