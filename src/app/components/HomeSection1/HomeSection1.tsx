import React from 'react';

const Section1 = () => {
  return (
    <div className="relative h-[90vh] w-full flex flex-col items-center justify-center px-8 sm:px-4 lg:px-20 overflow-hidden">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: "url('https://img.freepik.com/free-photo/clothes_144627-25214.jpg?t=st=1729925813~exp=1729929413~hmac=6ad2423817e049bf63a90c0a373ce3774df8ac1e2f6827a604836229b4384500&w=826')" }}
      />
      <div className="relative z-10 text-center">
        <h5 className="text-base sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
          Welcome to Zenly Apparels
        </h5>
      </div>
      <h1 className="text-2xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-[#333] z-10">
        A world of Quality and
      </h1>
      <h1 className="text-2xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-[#333] z-10">
        Endless Designs
      </h1>
      <div className="mt-7 z-10">
        <button className="bg-[#FEAB17] hover:bg-[#e59e14] transition duration-300 ease-in-out px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-medium shadow-md transform hover:scale-105">
          Discover More
        </button>
      </div>
    </div>
  );
}

export default Section1;
