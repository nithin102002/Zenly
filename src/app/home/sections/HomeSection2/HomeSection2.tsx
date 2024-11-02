'use client';
import React, { useEffect, useState } from 'react';
import HomeSection2Top from './HomeSection2Component/HomeSection2Top';
import HomeSection2Bottom from './HomeSection2Component/HomeSection2Bottom';

const HomeSection2: React.FC = () => {
  const [visibleIndex, setVisibleIndex] = useState<number>(-1);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    const startSequence = () => {
      let index = 0;
      interval = setInterval(() => {
        setVisibleIndex(index);

        timeout = setTimeout(() => {
          setVisibleIndex(-1); // Hide after 0.5 seconds
          index = (index + 1) % 5; // Total of 5 images between both components
        }, 1000); // Box visible for 1 second
      }, 1500); // 1.5 seconds interval between images
    };

    startSequence();

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="bg-[#f3f3f3]">
      <HomeSection2Top visibleIndex={visibleIndex} />
      <HomeSection2Bottom visibleIndex={visibleIndex} indexOffset={2} />
    </div>
  );
};

export default HomeSection2;
