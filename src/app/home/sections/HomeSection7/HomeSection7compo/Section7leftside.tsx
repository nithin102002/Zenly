import React from "react";

const Section7leftside = () => {
  return (
    <div className="h-[50%] w-full lg:h-full lg:w-[50%] bg-[#F3F3F3] flex flex-col">
      {/* Title Section */}
      <div className="h-[50%] w-full flex items-center justify-center">
        <div className="bg-[#FEAB17] h-[80%] w-[80%] flex flex-col items-center justify-center shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <h1 className="text-lg font-teko  tracking-wide sm:text-3xl md:text-4xl font-semibold text-center">
            WE’RE COMMITTED TO DELIVER
          </h1>
          <h1 className="text-lg font-teko  tracking-wide sm:text-3xl md:text-4xl font-semibold text-center">
            HIGH QUALITY PRODUCTS.
          </h1>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="flex flex-col gap-4 h-[50%] w-full items-center justify-center">
        {[
          { number: '01', text: 'Premium products with affordable Price' },
          { number: '02', text: 'No compromise in quality' }
        ].map((feature, index) => (
          <div key={index} className="h-[40%] w-[80%] flex items-center justify-start px-10 shadow-lg rounded-md bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <p className="h-12 w-12 font-rubik tracking-wide sm:h-16 sm:w-16 rounded-full text-xs sm:text-sm font-bold bg-[#FEAB17] flex items-center justify-center">
              {feature.number}
            </p>
            <h1 className="text-sm font-teko  tracking-wide sm:text-xl md:text-xl font-medium ml-4">
              {feature.text}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section7leftside;
