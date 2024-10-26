"use client";
import React from 'react';
import Image from 'next/image';
import image1 from '../HomeSection10/assets/Image1.jpeg';
import image2 from '../HomeSection10/assets/Image2.jpeg';
import image3 from '../HomeSection10/assets/Image3.jpeg';

const testimonials = [
  {
    img: image1,
    review: "The garments are of excellent quality, stylish, and fit perfectly. Highly recommend this brand!",
  },
  {
    img: image2,
    review: "I was impressed with the fast delivery and the material of the clothes. Comfortable and durable!",
  },
  {
    img: image3,
    review: "Great designs and fantastic customer service. The colors and fabric exceeded my expectations.",
  },
];

export default function HomeSection10() {
  return (
    <div className="w-full py-16 px-4 bg-[#f3f3f3] lg:px-16 text-center">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
        Client Testimonials
      </h2>

      {/* Testimonial Images */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="group text-center w-full sm:w-80 md:w-1/3"> {/* Added width for layout */}
            {/* Image Container */}
            <div className="w-full h-auto overflow-hidden mx-auto grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out rounded-lg mb-4">
              <Image
                src={testimonial.img}
                alt="Testimonial Image"
                className="w-full h-full object-cover"
                draggable="false"
              />
            </div>

            {/* Review Text */}
            <p className="text-gray-600 mt-2 px-4 text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl">
              {testimonial.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
