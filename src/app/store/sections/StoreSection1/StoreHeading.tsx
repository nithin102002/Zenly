import React from 'react';

const StoreHeading = () => {
  return (
    <div 
      className="h-[50vh] relative flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://pixydrops.com/linoorhtml/images/background/image-7.jpg')"
      }}
    >
      {/* Black overlay with 65% opacity */}
      <div className="absolute inset-0 bg-black opacity-65"></div>

      {/* Content */}
      <div className="relative flex items-center justify-center">
        <h1 className="text-7xl font-teko  tracking-wide font-bold text-white">CONTACT</h1>
      </div>
    </div>
  );
};

export default StoreHeading;
