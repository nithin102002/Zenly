"use client";
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import image1 from '../HomeSection6/assets/image1.png';
import image2 from '../HomeSection6/assets/image2.jpg';
import image3 from '../HomeSection6/assets/image3.png';
import image4 from '../HomeSection6/assets/image4.png';
import image5 from '../HomeSection6/assets/image5.jpeg';

const images = [image1, image2, image3, image4, image5];

export default function HomeSection6() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    if (scrollLeft === 0) {
      scrollRef.current.scrollLeft = scrollWidth - clientWidth * 2;
    } else if (scrollLeft >= scrollWidth - clientWidth) {
      scrollRef.current.scrollLeft = clientWidth;
    }
  };

  useEffect(() => {
    const slider = scrollRef.current;
    if (slider) {
      slider.scrollLeft = slider.clientWidth;
    }
  }, []);

  return (
    <div
      className="w-full overflow-hidden py-8 px-4 lg:px-16 cursor-grab active:cursor-grabbing"
      ref={scrollRef}
      onMouseDown={startDragging}
      onMouseMove={onDrag}
      onMouseLeave={stopDragging}
      onMouseUp={stopDragging}
      onScroll={handleScroll}
    >
      <div className="flex gap-8 w-max select-none px-4 lg:px-8">
        {/* Duplicate images at the start and end for seamless looping */}
        {images.concat(images, images).map((img, index) => (
          <div
            key={index}
            className="min-w-[220px] sm:min-w-[240px] md:min-w-[260px] lg:min-w-[280px] h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] flex-shrink-0 relative bg-white rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
            style={{ padding: '10px', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)' }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={img}
                alt={`Image ${index}`}
                className="w-full h-full object-contain p-2"
                draggable="false"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
