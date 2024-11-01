"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutOurPassion = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Check if screen width is large (e.g., 1024px or above)
    if (window.innerWidth >= 1024) {
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

      // Animation for image zoom effect while scrolling on large screens only
      gsap.fromTo(imgRef.current, 
        { scale: 1 }, 
        {
          scale: 1.2, // Increased zoom to 120%
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
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 md:p-10 lg:p-16 bg-[#f3f3f3]">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0 md:order-1">
        <img
          ref={imgRef}
          src="/assets/pass.jpg" // Replace with your image URL
          alt="Our Passion"
          className="object-cover w-full h-auto max-w-md rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      {/* Right Section: Our Passion */}
      <div 
        className="w-full md:w-1/2 flex flex-col items-center text-left mb-4 md:mb-0 md:order-2 max-h-[70vh] overflow-y-auto" 
        ref={textRef}
      >
        <h1 className="text-3xl font-teko sm:text-4xl md:text-5xl font-extrabold text-black tracking-wide mb-4 sm:mb-6">
          Our Passion
        </h1>
        <p className="text-base font-rubik md:text-lg lg:text-xl font-normal text-black leading-relaxed tracking-wide max-w-prose mb-2 md:ml-4">
             At Zenly Apparels, fashion is our craft and commitment. We&apos;re dedicated to creating garments that combine premium quality with modern design, ensuring each piece is stylish, comfortable, and made to last.
          <br /><br />
          Rooted in PRK Garments&apos; legacy of excellence, our passion drives us to deliver apparel that goes beyond trends, embodying elegance and craftsmanship in every detail. For us, fashion isn&apos;t just about what you wear—it&apos;s about creating lasting value and style you can trust.
</p>
      </div>
    </div>
  );
};

export default AboutOurPassion;
