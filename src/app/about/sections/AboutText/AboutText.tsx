import React from 'react';

const AboutText = () => {
  return (
    <div
      className="h-[50vh] flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: "url('/assets/aboutbg.jpg')", // Replace with your image URL
        backgroundSize: 'cover',  // Ensures the image covers the entire div
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents image from repeating
        position: 'relative',
      }}
    >
      {/* Black overlay for opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center"> {/* Ensures text is above overlay */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-teko tracking-wide">
          About Us
        </h1>
      </div>
    </div>
  );
};

export default AboutText;
