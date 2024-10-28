"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

const Section1 = () => {
  useEffect(() => {
    // GSAP animations for fade-in and slide-up effects
    gsap.fromTo(
      ".fade-in", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.3, ease: "power2.out" }
    );

    gsap.fromTo(
      ".button-scale", 
      { scale: 0.8 },
      { scale: 1, duration: 0.8, ease: "elastic.out(1, 0.3)", delay: 1.5 }
    );
  }, []);

  return (
    <div className="relative h-[90vh] w-full flex flex-col items-center justify-center px-8 sm:px-4 lg:px-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://imgs.search.brave.com/zXDZ_-f6edh4YQrgm49PlT9MpN6Li7h-Bxcd6IZSU_U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjQyMDI1/MjY1NTktZTIxZTlj/MGZiNDZhP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjAuMyZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1Y/eDhabUZ6YUdsdmJu/eGxibnd3Zkh3d2ZI/eDhNQT09')",
        }}
      />

      {/* Black Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{
          opacity: 0.7, // Increase opacity for a darker overlay
        }}
      ></div>

      <div className="relative z-10 text-center">
        <h5 className="text-base sm:text-2xl lg:text-3xl xl:text-4xl text-white font-bold mb-4 fade-in">
          Welcome to Zenly Apparels
        </h5>
      </div>
      <h1 className="text-2xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-white z-10 fade-in">
        A world of Quality and
      </h1>
      <h1 className="text-2xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white z-10 fade-in">
        Endless Designs
      </h1>
      
      {/* Discover More Button with Link */}
      <div className="mt-7 z-10">
        <Link href="/product"> {/* Change '/about' to your desired path */}
          <button className="bg-[#FEAB17] hover:bg-[#e59e14] transition duration-300 ease-in-out px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-medium shadow-md transform button-scale">
            Discover More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Section1;
