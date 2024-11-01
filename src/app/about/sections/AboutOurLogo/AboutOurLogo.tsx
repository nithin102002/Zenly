'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutOurLogo = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const zoomScale = isMobile ? 1.05 : 1.1;

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
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 md:p-10 lg:p-16 bg-[#f3f3f3]">
      <div 
        className="w-full md:w-1/2 flex flex-col items-center text-left mb-4 md:mb-0 md:order-1 max-h-[70vh] overflow-y-auto" 
        ref={textRef}
      >
        <h1 className="text-3xl font-teko sm:text-4xl md:text-5xl font-extrabold text-black tracking-wide mb-4 sm:mb-6">
          Our Logo
        </h1>
        <p className="text-base font-rubik md:text-lg lg:text-xl font-normal text-black leading-relaxed tracking-wide max-w-prose mb-2 md:ml-4">
          Our logo captures Zenly Apparels&apos; essence: elegance and modern style. The hanger shape symbolizes our commitment to high-quality fashion, with the letter &quot;Z&quot; as its focal point, representing Zenly. The remaining letters (&quot;E,&quot; &quot;N,&quot; &quot;L,&quot; and &quot;Y&quot;) are subtly integrated, creating a balanced and unique design.
          <br /><br />
          The thin Monument Valley font in the wordmark conveys refined elegance, while the submark—a bold &quot;Z&quot;-shaped hanger—emphasizes our brand identity. This logo embodies our vision: timeless style, crafted with sophistication.
        </p>
      </div>

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
