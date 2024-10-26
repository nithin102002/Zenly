import React from 'react';

const HomeSectionRight = () => {
  return (
    <div className="flex justify-center items-center w-full h-full md:w-1/2 mt-6 md:mt-0 md:ml-8">
      <img 
        src="https://images.pexels.com/photos/5705490/pexels-photo-5705490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Wardrobe"
        className="w-full sm:w-3/4 md:w-5/6 lg:w-full h-auto object-cover rounded-lg shadow-lg max-h-[80vh] transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
}

export default HomeSectionRight;
