import React from "react";

const Section7leftside = () => {
  return (
    <div className="h-[50%] w-full lg:h-full lg:w-[50%] bg-[#F3F3F3] flex flex-col">
      <div className="h-[50%] w-full flex items-center justify-center">
        <div className="bg-[#FEAB17] h-[80%] w-[80%] flex flex-col items-center justify-center shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
          <h1 className="text-lg sm:text-3xl md:text-4xl font-semibold text-center">
            WE’RE COMMITTED TO DELIVER
          </h1>
          <h1 className="text-lg sm:text-3xl md:text-4xl font-semibold text-center">
            HIGH QUALITY PRODUCTS.
          </h1>
        </div>
      </div>

      <div className="h-[25%] w-full flex items-center justify-center">
        <div className="h-[80%] w-[80%] flex gap-8 items-center justify-start px-10 shadow-lg rounded-md bg-white">
          <p className="h-12 w-12 sm:h-16 sm:w-16 rounded-full text-xs sm:text-sm font-bold bg-[#FEAB17] flex items-center justify-center">
            01
          </p>
          <div>
            <h1 className="text-[0.62rem] sm:text-xl md:text-xl font-medium">
              Premium products with affordable Price
            </h1>
          </div>
        </div>
      </div>

      <div className="h-[25%] w-full flex items-center justify-center">
        <div className="h-[80%] w-[80%] flex gap-8 items-center justify-start px-10 shadow-lg rounded-md bg-white">
          <p className="h-12 w-12 sm:h-16 sm:w-16 rounded-full text-xs sm:text-sm font-bold bg-[#FEAB17] flex items-center justify-center">
            02
          </p>
          <div>
            <h1 className="text-[0.70rem] sm:text-xl md:text-xl font-medium">
              No compromise in quality
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7leftside;
