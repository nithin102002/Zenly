'use client';
import { useState } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import m1 from '../product/assets/M1.jpg';
import m2 from '../product/assets/m21.jpg';
import m3 from '../product/assets/m3.jpg';
import m4 from '../product/assets/m4.jpg';
import w1 from '../product/assets/w12.jpg';
import w2 from '../product/assets/w21.jpg';
import w3 from '../product/assets/w3.jpg';
import w4 from '../product/assets/w4.jpg';
import w5 from '../product/assets/w5.jpg';
import w6 from '../product/assets/w6.jpg';
import k1 from '../product/assets/k1.jpg';
import k2 from '../product/assets/k2.jpg';
import a1 from '../product/assets/A1.jpeg';
import a2 from '../product/assets/A2.jpg';
import u1 from '../product/assets/u1.jpg';
import u2 from '../product/assets/u2.jpg';
import u3 from '../product/assets/u3.jpg';
import u4 from '../product/assets/u4.jpg';
import u5 from '../product/assets/u5.jpg';

const categories: string[] = ['All', "Men's Wear", "Women's Wear", "Kids' Wear", "U-form", 'Accessories'];

const productData: { [key: string]: StaticImageData[] } = {
  'All': [m1, w1, k1, a1, u1, m2, w2, k2, a2, u2, m3, w3, u3, m4, w4, u4, w5, u5, w6],
  "Men's Wear": [m1, m2, m3, m4],
  "Women's Wear": [w1, w2, w3, w4, w5, w6],
  "Kids' Wear": [k1, k2],
  "U-form": [u1, u2, u3, u4, u5],
  'Accessories': [a1, a2],
};

export default function Product() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [slideDirection, setSlideDirection] = useState<string>('right');
  const [transitioning, setTransitioning] = useState<boolean>(false);

  const handleCategoryChange = (category: string) => {
    if (category !== selectedCategory) {
      setTransitioning(true);
      setSlideDirection(category < selectedCategory ? 'left' : 'right');

      setTimeout(() => {
        setSelectedCategory(category);
        setTransitioning(false);
      }, 500); // Match the duration with CSS transition duration
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <div className="flex space-x-6 mb-6 overflow-x-auto w-full px-4 sm:px-8 justify-start md:justify-center">
        <div className="flex space-x-6">
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`cursor-pointer whitespace-nowrap text-base sm:text-lg md:text-xl lg:text-2xl ${
                selectedCategory === category ? 'text-black' : 'text-gray-700'
              }`}
            >
              {category}
              {selectedCategory === category && (
                <div className="h-1 mt-1 bg-yellow-500 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>
      <div
  className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-transform duration-500 ease-in-out transform ${transitioning ? (slideDirection === 'right' ? 'translate-x-full opacity-0' : '-translate-x-full opacity-0') : 'translate-x-0 opacity-100'}`}
>
  {(productData[selectedCategory] || []).map((image, index) => (
    <div
      key={index}
      className="relative w-64 h-64 bg-gray-300 rounded-md shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105"
    >
      <Image
        src={image}
        alt={selectedCategory}
        layout="fill"
        objectFit="cover"
        className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
      />
    </div>
  ))}
</div>

    </div>
  );
}
