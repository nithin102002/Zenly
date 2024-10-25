import React from 'react';
import Card from '../cards/Card' 
import mensWear from './assets/mens-wear.jpg';
import womensWear from './assets/womens-wear.jpg';
import kidsWear from './assets/kids-wear.jpg';
import accessories from './assets/accessories.jpeg';
import uniformWear from './assets/uniform-wear.jpg';
import hoverMensWear from './assets/hoverMensWear.jpg';
import hoverWomensWear from './assets/hoverWomensWear.jpg';
import hoverkidsWear from './assets/hoverkidsWear.jpg';
import hoveraccessories from './assets/hoveraccessories.jpg';
import hoveruniformWear from './assets/hoveruniformWear.jpg';

const categories = [
  {
    title: "Men's Wear",
    image: mensWear,
    hoverImage: hoverMensWear,
    description: "Sophisticated collection for modern gentlemen"
  },
  {
    title: "Women's Wear",
    image: womensWear,
    hoverImage: hoverWomensWear,
    description: "Elegant designs for the modern woman"
  },
  {
    title: "Kids Wear",
    image: kidsWear,
    hoverImage: hoverkidsWear,
    description: "Comfortable and stylish clothing for children"
  },
  {
    title: "Accessories",
    image: accessories,
    hoverImage: hoveraccessories,
    description: "Hats, Footwear, and more"
  },
  {
    title: "Premium Uniforms",
    image: uniformWear,
    hoverImage: hoveruniformWear,
    description: "Professional attire for every workplace"
  },
];

const homeSection2 = () => {
  return (
    <div className="w-full bg-[#f3f3f3]">
      <div className="max-w-7xl mx-20 px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="flex-1 md:w-1/2 mb-6 md:mb-0">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4 leading-tight">
                DISCOVER TIMELESS FASHION CRAFTED WITH CARE FOR YOU
              </h2>
              <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto md:mx-0 px-2 sm:px-0 py-2 leading-snug">
                We are committed to providing our customers with exceptional designs and quality garments.
              </p>
            </div>
          </div>

          <div className="flex-1 md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {categories.slice(0, 2).map((category) => (
              <Card
                key={category.title}
                title={category.title}
                description={category.description}
                image={category.image}
                hoverImage={category.hoverImage}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {categories.slice(2).map((category) => (
            <Card
              key={category.title}
              title={category.title}
              description={category.description}
              image={category.image}
              hoverImage={category.hoverImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default homeSection2;
