import React from 'react';
import HomeSectionLeft from './HomeSection5Component/homeSection5Left';
import HomeSectionRight from './HomeSection5Component/HomeSection5Right';

const HomeSection5 = () => {
  return (
    <div className="w-full min-h-screen bg-[#f3f3f3] text-black p-6 md:p-12 flex flex-col md:flex-row items-center md:items-stretch gap-8">
      <HomeSectionLeft />
      <HomeSectionRight />
    </div>
  );
}

export default HomeSection5;
