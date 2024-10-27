// pages/products.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image'; // Import StaticImageData

// Import images directly for use with next/image
import image1 from '../product/assets/w1.jpg';
import image2 from '../product/assets/w2.jpg';
import image3 from '../product/assets/w3.jpg';
import image4 from '../product/assets/w4.jpg';
import image5 from '../product/assets/u1.jpg';

const categories: string[] = ['All', "Men's Wear", "Women's Wear", "Kids' Wear", 'Uniform', 'Accessories'];

// Updated productData to use imported images directly
const productData: { [key: string]: StaticImageData[] } = {
  'All': [image1, image2, image3, image4, image5],
  "Men's Wear": [image1, image2],
  "Women's Wear": [image3, image4],
  "Kids' Wear": [image1, image5],
  'Uniform': [image2, image3],
  'Accessories': [image4, image5],
};

export default function Product() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <div className="flex space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 border rounded-lg ${
              selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
            } hover:bg-blue-300 transition duration-300 ease-in-out`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productData[selectedCategory].map((image, index) => (
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
