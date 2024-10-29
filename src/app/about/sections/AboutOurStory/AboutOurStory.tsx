"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutOurStory = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f3f3f3] items-center justify-center p-4 sm:p-6"> {/* Adjusted height and padding */}
      {/* Left Section: Our Story */}
      <div className="w-full md:w-1/2 flex flex-col items-center text-left mb-4 max-h-[70vh] overflow-y-auto" ref={textRef}>
        <h1 className="text-3xl font-teko sm:text-4xl md:text-5xl font-extrabold text-black tracking-wide mb-4 sm:mb-6"> {/* Adjusted margin bottom */}
          Our Story
        </h1>
        <p className="text-base font-rubik md:text-lg lg:text-xl font-normal text-black leading-relaxed tracking-wide max-w-prose mb-2 md:ml-10">
          Zenly Apparels, a brand under PRK Groups, represents our commitment to offering premium-quality apparel with a modern, fresh approach to fashion. 
          PRK Garments has evolved over the years into a leader in corporate uniforms, t-shirts, and tracksuits, delivering the highest standards of quality and craftsmanship.
          <br /><br />
          As we celebrate over two decades of success, PRK Garments proudly stands as a premier name in the textile industry, driven by innovation, customer satisfaction, and a commitment to perfection. 
          We continue to expand our reach, ensuring our products meet the evolving needs of our customers.
        </p>
      </div>
    </div>
  );
};

export default AboutOurStory;
