import React from 'react';
import Page3Image from './Section3compo/Section3Image';
import Page3Content from './Section3compo/Section3Content';

const Page3 = () => {
  return (
    <div className="h-screen w-full py-10 bg-[#f3f3f3] flex flex-col md:flex-row sm:px-4 md:px-10">
      <Page3Content />
      <Page3Image />
    </div>
  );
};

export default Page3;
