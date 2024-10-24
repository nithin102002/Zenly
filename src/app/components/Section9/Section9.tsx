import React from 'react';
import Section9left from './Section9compo/Section9left';
import Section9right from './Section9compo/Section9right';

const Section9 = () => {
  return (
    <div className='h-screen w-full bg-[#f3f3f3] flex flex-col md:flex-row sm:px-4 md:px-10 transition-colors duration-300'>
      <Section9left />
      <Section9right />
    </div>
  );
}

export default Section9;
