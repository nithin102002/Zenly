'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import image1 from '../../../../../public/assets/CF1.jpeg';
import image2 from '../../../../../public/assets/CF2.jpeg';
import image3 from '../../../../../public/assets/CF3.jpeg';

interface Testimonial {
  name: string;
  photo: StaticImageData;
  role: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Albert",
    photo: image1,
    role: "Director",
    review: "There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    name: "Shirley Smith",
    photo: image2,
    role: "Director",
    review: "There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    name: "Jane Doe",
    photo: image3,
    role: "Developer",
    review: "There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  }
];

export default function HomeSection10() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startDragging = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    if (scrollRef.current) {
      setStartX(pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
    stopAutoScroll(); // Stop auto-scrolling on user interaction
  };

  const stopDragging = () => {
    setIsDragging(false);
    resetAutoScrollTimeout(); // Restart timeout to enable auto-scroll again
  };

  const onDrag = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    if (scrollRef.current) {
      const x = pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        const testimonialWidth = scrollRef.current.firstElementChild?.clientWidth || 0;
        const scrollAmount = testimonialWidth * 0.8;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 2000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetAutoScrollTimeout = () => {
    stopAutoScroll(); // Stop any existing auto scroll
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Restart the auto-scroll after 3 seconds
    timeoutRef.current = setTimeout(() => {
      startAutoScroll();
    }, 3000);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    if (scrollRef.current.scrollLeft <= 0) {
      scrollRef.current.scrollLeft = scrollWidth / 3; // Reset to the middle section
    } else if (scrollRef.current.scrollLeft >= scrollWidth) {
      scrollRef.current.scrollLeft = scrollWidth / 3; // Reset to the middle section
    }
  };

  useEffect(() => {
    const slider = scrollRef.current;
    if (slider) {
      slider.scrollLeft = slider.clientWidth; // Initial scroll position to show the first testimonial
    }
    resetAutoScrollTimeout(); // Start the timeout for auto scroll

    return () => {
      stopAutoScroll();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-[#f3f3f3] w-full py-8 px-4 lg:px-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-teko tracking-wide sm:text-4xl md:text-5xl font-bold text-gray-800">
          Customer feedbacks
        </h2>
      </div>
      <div
        className="w-full overflow-hidden py-8 px-4 lg:px-16 cursor-grab active:cursor-grabbing"
        ref={scrollRef}
        onMouseDown={startDragging}
        onMouseMove={onDrag}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onTouchStart={startDragging}
        onTouchMove={onDrag}
        onTouchEnd={stopDragging}
        onScroll={handleScroll} // Handle scroll event
      >
        <div className="flex gap-10 w-max select-none">
          {/* Render testimonials */}
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div
              key={index}
              className="w-[80vw] sm:w-[70vw] md:w-[50vw] lg:max-w-[60vh] h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[40vh] bg-white rounded-lg shadow-lg p-6 relative transition-colors duration-300 hover:bg-black group flex-shrink-0"
              style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 relative rounded-full overflow-hidden">
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                    draggable="false"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-teko tracking-wide sm:text-base md:text-lg font-semibold text-gray-800 group-hover:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs font-teko tracking-wide sm:text-sm md:text-base text-orange-600 group-hover:text-white">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-xs font-rubik sm:text-sm md:text-base leading-relaxed text-gray-600 group-hover:text-white">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
