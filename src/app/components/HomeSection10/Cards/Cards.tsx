import React from 'react';

const Cards = () => {
  return (
    <div className='h-40 w-40 sm:h-48 sm:w-48 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96  flex flex-col'>
      {/* Card content */}
      <div className="h-[85%] w-full">
        <img
          src="https://imgs.search.brave.com/nsmawqCq6Zwu0DjhY8l91Yppx4lchW--cjAHV-K6GqI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzQ4LzQwLzY1/LzM2MF9GXzY0ODQw/NjUxNF8wcllPOVZI/UExWYjczTnByQ29k/ejlzVzRDM1M4MXVh/ai5qcGc"
          alt="Product Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="h-[15%] flex items-center justify-center p-2">
        <h3 className="font-bold text-center text-xs sm:text-[10px] md:text-base lg:text-lg xl:text-xl overflow-hidden text-ellipsis whitespace-nowrap">
          "Great quality and fast shipping!"
        </h3>
      </div>
    </div>
  );
};

export default Cards;
