import React from 'react';

const Page3Image = () => {
  return (
    <div className="h-[50%] md:h-full w-full md:w-[50%] mt-5 md:mt-0 shadow-2xl rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
      <img 
         src="/assets/T-shirt.png"
        alt="Cotton Fabric"
        className="w-full h-full object-cover" // Removed opacity transition
      />
    </div> 
  );
};

export default Page3Image;
