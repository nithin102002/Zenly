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
      { x: 100, opacity: 0 }, // Start from 100px to the right
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // Start animation when text is in view
        }
      }
    );

    // Animation for image zoom effect while scrolling
    gsap.fromTo(imgRef.current, 
      { scale: 1 }, 
      {
        scale: 1.1, // Zoom in to 110%
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
          end: "top 40%", // Scale back to original when it reaches 40% from top
          scrub: true, // Allows the animation to follow scroll
        }
      }
    );
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-[#f3f3f3]"> {/* Centered content */}
      {/* Left Section: Logo Description */}
      <div 
        className="w-full md:w-1/2 flex flex-col items-center text-left mb-4 md:mb-0 md:order-1" 
        ref={textRef} // Reference for text animation
      >
        <h1 className="text-3xl font-teko  sm:text-4xl md:text-5xl font-extrabold text-black tracking-wide mb-6"> {/* Increased bottom margin */}
          Our Logo
        </h1>
        <p className="text-base font-rubik md:text-lg lg:text-xl font-normal text-black leading-relaxed tracking-wide max-w-prose mb-2 md:ml-4"> {/* Added left margin for bigger screens */}
          Our logo embodies the spirit of Zenly Apparels, representing our commitment to quality and style. It symbolizes our mission to provide apparel that enhances individuality and confidence.
          <br /><br />
          Crafted with precision, our logo reflects our dedication to excellence in every aspect of our work. We aim to create a strong visual identity that resonates with our customers and stands the test of time.
        </p>
      </div>

      {/* Right Section: Logo */}
      <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0 md:order-2"> {/* Adjusted bottom margin and order */}
        <img
          ref={imgRef} // Reference for image animation
          src="/assets/Primary_.svg" // Replace with your logo image URL
          alt="Our Logo"
          className="object-cover w-full h-auto max-w-md rounded-lg transition-transform duration-300 ease-in-out hover:scale-110" // Added hover zoom effect
        />
      </div>
    </div>
  );
};

export default AboutOurLogo;
