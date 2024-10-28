import React from "react";

const Section7rightside = () => {
  return (
    <div className="h-[50%] w-full lg:h-full lg:w-[50%] bg-[#F3F3F3] flex flex-col items-center justify-center overflow-hidden">
      {/* Header with Reduced Animation */}
      <div className="h-[35%] w-full flex flex-row items-center justify-center text-black animate-fade-in duration-200">
        <div className="mt-10">
          <h1 className="text-base font-bold sm:text-4xl md:text-5xl px-4 mb-2">
            WE ARE TRUSTED BY MORE THAN 120 + LEADING CORPORATE INDUSTRY{" "}
            <span className="text-[#FEAB17]">.</span>
          </h1>
        </div>
      </div>

      {/* Description with Reduced Animation */}
      <div className="h-[30%] w-full text-black flex items-center justify-center animate-fade-in duration-200">
        <div className="flex items-center justify-center">
          <p className="text-sm sm:text-base md:text-lg px-4">
            Discover our latest collection of garments crafted from premium
            cotton. Experience unparalleled comfort and style, perfect for any
            occasion. Shop now for quality you can feel!
          </p>
        </div>
      </div>

      {/* Image and Features List with Reduced Animation */}
      <div className="h-[35%] w-full ml-8 flex flex-row animate-fade-in duration-200">
        <div className="h-full w-full shadow-2xl rounded-lg overflow-hidden">
          <img
            src="https://t3.ftcdn.net/jpg/07/09/81/44/240_F_709814423_yoUxElNMhkZzta4oNZAPm3AfFqm2qfdr.jpg"
            alt="Garment Collection"
            className="object-cover h-full w-full transform transition-transform duration-200 hover:scale-105"
          />
        </div>
        <div className="h-full w-full text-black flex items-center justify-center">
          <ul>
            {[
              "Time delivery",
              "Good quality",
              "Premium look",
              "Creative",
            ].map((item, index) => (
              <li
                key={index}
                className="text-sm sm:text-xl md:text-3xl font-bold mb-3 animate-fade-in duration-200"
              >
                <span className="text-[#FEAB17] font-black">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section7rightside;
