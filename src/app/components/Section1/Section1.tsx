import React from 'react';

const Section1 = () => {
  return (
    <div>
      <main className="h-[90vh] w-full bg-[#f3f3f3] flex flex-col items-start justify-center px-8 sm:px-4 lg:px-20">
        <div>
          <h5 className="text-1xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2">
            Welcome to Zenly Apparels
          </h5>
        </div>
        <h1 className="text-3xl sm:text-6xl lg:text-6xl xl:text-8xl font-bold mb-2">
          A world of Quality and
        </h1>
        <h1 className="text-3xl sm:text-6xl lg:text-6xl xl:text-8xl font-bold mb-2">
          Endless Designs
        </h1>
        <div className="mt-7">
          <button className="bg-[#FEAB17] px-6 sm:px-8 py-3 sm:py-4 rounded text-lg sm:text-xl font-medium">
            Discover more
          </button>
        </div>
      </main>
    </div>
  );
}

export default Section1;
