"use client";

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HomeSection8 = () => {
  useEffect(() => {
    // GSAP animation with ScrollTrigger for fade-in and scale-up effect
    gsap.fromTo(
      ".animated-text",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".animated-text",
          start: "top 80%", // animation starts when text is 80% into the viewport
          toggleActions: "play none none reverse", // replay animation on scroll up
        },
      }
    );
  }, []);

  return (
    <div className='h-screen w-full bg-gradient-to-r from-[#161617] to-[#3b3b3b] flex justify-center items-center p-4 sm:p-6 md:p-10'>
      <div className='flex items-center justify-center w-full sm:w-[90%] md:w-[80%] text-center'>
        <h1 className='animated-text-section8 font-teko  tracking-wide text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight  shadow-lg'>
          GREAT THINGS IN BUSINESS ARE NEVER DONE <br /> BY ONE PERSON.{' '}
          <span className='text-[#FEAB17]'>
            THEY&apos;RE DONE BY <br /> A TEAM OF PEOPLE
          </span>
        </h1>
      </div>
    </div>
  );
};

export default HomeSection8;

