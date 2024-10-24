import React from "react";

const Page3Content = () => {
  return (
    <div className="h-[50%] md:h-full w-full md:w-[50%] flex flex-col justify-center px-7">
      <h1 className="text-black text-2xl md:text-6xl lg:text-6xl xl:text-8xl font-black mb-10">
        Why Zenly?
      </h1>
      <h4 className="text-black text-sm md:text-base lg:text-2xl xl:text-4xl font-bold mb-6">
        With every stitch and detail, we strive to deliver perfection.
      </h4>
      <p className="text-black text-xs md:text-sm lg:text-lg xl:text-2xl font-normal mb-6">
        “At Zenly Apparels, we blend modern trends with classic style to create
        an apparel that speaks to your unique sense of style."
      </p>
      <div className="flex flex-col  md:flex-row items-start  md:items-center text-xs gap-5 lg:text-xl ">
        <div className="flex flex-col gap-2">
          <p> <b>⦁  Comfort</b> – Our clothes are made with natural fabrics that feel soft and comfortable</p>
          <p> <b>⦁ Designs</b> - We always blend classic and trends to create designs.</p>
          <p> <b>⦁ Affordable</b> – We make people look good without breaking the bank balance.</p>
        </div>
            <img src="" className="h-16 w-16 bg-orange-600 rounded-full mb-5 md:mb-0" />
      </div>
      <div className="mt-7">
            <button className="bg-[#FEAB17] px-8 py-4 rounded text-xl font-medium">Discover more</button>
        </div>
    </div>
  );
};

export default Page3Content;
