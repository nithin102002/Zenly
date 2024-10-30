"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutOurPassion = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for text sliding in
    gsap.fromTo(textRef.current, 
      { x: -100, opacity: 0 }, 
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // start animation when text is in view
        }
      }
    );

    // Animation for image zoom effect
    gsap.fromTo(imgRef.current, 
      { scale: 1 }, 
      {
        scale: 1.1, // Zoom in to 110%
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
          end: "top 40%", // scale back to original when it reaches 40% from top
          scrub: true, // allows the animation to follow scroll
        }
      }
    );
  }, []);

  return (
    <div className="min-h-[60vh] flex flex-col md:flex-row items-center justify-center p-4 sm:p-5 bg-[#f3f3f3]">
      {/* Right Section: Our Passion */}
      <div 
        className="w-full md:w-1/2 flex flex-col items-center text-center mb-4 md:mb-0 md:order-2" // Centering text in mobile view
        ref={textRef} // Reference for text animation
      >
        <h1 className="text-3xl font-teko sm:text-4xl md:text-5xl font-extrabold text-black tracking-wide mb-2 sm:mb-4">
          Our Passion
        </h1>
        <p className="text-base font-rubik md:text-lg lg:text-xl font-normal text-black leading-relaxed tracking-wide max-w-prose mb-2 md:ml-4">
        At Zenly Apparels, fashion is our craft and commitment. We’re dedicated to creating garments that combine premium quality with modern design, ensuring each piece is stylish, comfortable, and made to last.
          <br /><br />
          Rooted in PRK Garments' legacy of excellence, our passion drives us to deliver apparel that goes beyond trends, embodying elegance and craftsmanship in every detail. For us, fashion isn’t just about what you wear—it's about creating lasting value and style you can trust.
        </p>
      </div>

      {/* Left Section: Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0 md:order-1">
        <img
          ref={imgRef} // Reference for image animation
          src="/assets/pass.jpg" // Replace with your image URL
          alt="Our Passion"
          className="object-cover w-full h-auto max-w-md rounded-lg"
        />
      </div>
    </div>
  );
};

export default AboutOurPassion;
