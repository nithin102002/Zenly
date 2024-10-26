import React from 'react';
import HomeSection3Content from './HomeSection3compo/Section3Content';
import HomeSection3Image from './HomeSection3compo/Section3Image';

const Page3 = () => {
  return (
    <div className="h-screen w-full py-10 bg-[#f3f3f3] flex flex-col md:flex-row sm:px-4 md:px-10">
      <HomeSection3Content/>
      <HomeSection3Image/>
    </div>
  );
};

export default Page3;
