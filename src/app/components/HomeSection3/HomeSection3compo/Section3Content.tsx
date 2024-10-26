import React from "react";

const Page3Content = () => {
  return (
    <div className="h-[60%] md:h-full w-full md:w-[50%] flex flex-col justify-center items-start px-8 sm:px-10 md:px-12 lg:px-16">
      <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 lg:mb-8">
        Why Zenly?
      </h1>
      <h4 className="text-gray-800 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-4 lg:mb-6">
        With every stitch and detail, we strive to deliver perfection.
      </h4>
      <p className="text-gray-600 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-normal mb-4 lg:mb-6 leading-relaxed">
        “At Zenly Apparels, we blend modern trends with classic style to create apparel that
        speaks to your unique sense of style."
      </p>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-5 lg:gap-10 text-xs sm:text-sm lg:text-lg xl:text-xl mb-5">
        <div className="flex flex-col gap-3">
          <p><b>⦁ Comfort</b> – Our clothes are made with natural fabrics that feel soft and comfortable</p>
          <p><b>⦁ Designs</b> - We always blend classic and trends to create designs.</p>
          <p><b>⦁ Affordable</b> – We make people look good without breaking the bank balance.</p>
        </div>
        <img
          src="/assets/Primary.svg"
          alt="Zenly Logo"
          className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 rounded-full shadow-md mt-5 md:mt-0"
        />
      </div>
      <div className="mt-5">
        <button className="bg-[#FEAB17] hover:bg-[#e59e14] transition duration-300 ease-in-out px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg lg:text-xl font-medium shadow-md transform hover:scale-105">
          Discover more
        </button>
      </div>
    </div>
  );
};

export default Page3Content;
