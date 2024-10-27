"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutOurStory = () => {
  useEffect(() => {
    // GSAP animation for title and paragraph
    gsap.fromTo(
      ".title",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".title",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".content",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".content",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div className="h-[85vh] lg:h-[80vh] w-full bg-[#f3f3f3] flex flex-col items-center justify-center px-6 md:px-8 lg:px-10 xl:px-12">
      {/* Title Section */}
      <div className="w-full max-w-4xl flex justify-center items-center text-center mb-6">
        <h1 className="title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 tracking-wide">
          OUR STORY
        </h1>
      </div>
      
      {/* Paragraph Section */}
      <div className="content w-full max-w-6xl text-center sm:text-left">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed px-2 sm:px-4 md:px-6 lg:px-8 tracking-wide">
          Zenly Apparels, a brand under PRK Groups, represents our commitment to offering premium-quality apparel with a modern, fresh approach to fashion. PRK Garments has evolved over the years into a leader in corporate uniforms, t-shirts, and tracksuits, delivering the highest standards of quality and craftsmanship.
          <br /><br />
          As we celebrate over two decades of success, PRK Garments proudly stands as a premier name in the textile industry, driven by innovation, customer satisfaction, and a commitment to perfection. We continue to expand our reach, ensuring our products meet the evolving needs of our customers.
        </p>
      </div>
    </div>
  );
};

export default AboutOurStory;
