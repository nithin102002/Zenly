"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutOurLogo = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for text sliding in from right
    gsap.fromTo(textRef.current, 
      { x: 100, opacity: 0 }, 
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        }
      }
    );

    // Check if the screen is mobile size
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const zoomScale = isMobile ? 1.05 : 1.1; // Reduced scale for mobile

    // Animation for image zoom effect while scrolling
    gsap.fromTo(imgRef.current, 
      { scale: 1 }, 
      {
        scale: zoomScale,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4 sm:p-6 bg-[#f3f3f3]"> {/* Adjusted height and padding */}
      {/* Left Section: Logo Description */}
      <div 
        className="w-full md:w-1/2 flex flex-col items-center text-left mb-4 md:mb-0 md:order-1 max-h-[70vh] overflow-y-auto" 
        ref={textRef}
      >
        <h1 className="text-3xl font-teko sm:text-4xl md:text-5xl font-extrabold text-black tracking-wide mb-4 sm:mb-6"> {/* Adjusted margin bottom */}
          Our Logo
        </h1>
        <p className="text-base font-rubik md:text-lg lg:text-xl font-normal text-black leading-relaxed tracking-wide max-w-prose mb-2 md:ml-4">
          Our logo embodies the spirit of Zenly Apparels, representing our commitment to quality and style. It symbolizes our mission to provide apparel that enhances individuality and confidence.
          <br /><br />
          Crafted with precision, our logo reflects our dedication to excellence in every aspect of our work. We aim to create a strong visual identity that resonates with our customers and stands the test of time.
        </p>
      </div>

      {/* Right Section: Logo */}
      <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0 md:order-2">
        <img
          ref={imgRef}
          src="/assets/logo.jpg"
          alt="Our Logo"
          className="object-cover w-full h-auto max-w-md rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
    </div>
  );
};

export default AboutOurLogo;
