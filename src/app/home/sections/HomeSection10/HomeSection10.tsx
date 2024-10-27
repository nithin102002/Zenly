'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import image1 from '../HomeSection10/assets/Image1.jpeg';
import image2 from '../HomeSection10/assets/Image2.jpeg';
import image3 from '../HomeSection10/assets/Image3.jpeg';

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
  const [autoScrollActive, setAutoScrollActive] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startDragging = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
    if (scrollRef.current) {
      setStartX(pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const stopDragging = () => {
    setIsDragging(false);
    setAutoScrollActive(false); // Stop auto-scrolling on user interaction
    setTimeout(() => setAutoScrollActive(true), 5000); // Restart after 5 seconds
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
    }, 5000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const slider = scrollRef.current;
    if (slider) {
      slider.scrollLeft = slider.clientWidth;
    }
    if (autoScrollActive) {
      startAutoScroll();
    }

    return () => {
      stopAutoScroll();
    };
  }, [autoScrollActive]);

  return (
    <div className="w-full py-8 px-4 lg:px-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
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
      >
        <div className="flex gap-10 w-max select-none">
          {testimonials.concat(testimonials, testimonials).map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[350px] h-[320px] sm:min-w-[400px] sm:max-w-[450px] sm:h-[400px] md:min-w-[600px] md:max-w-[650px] md:h-[450px] lg:min-w-[800px] lg:max-w-[800px] lg:h-[500px] bg-white rounded-lg shadow-lg p-8 sm:p-10 md:p-12 lg:p-16 relative transition-colors duration-300 hover:bg-black group"
              style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="flex items-center mb-8 sm:mb-10 md:mb-12">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 relative rounded-full overflow-hidden">
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="object-cover"
                    draggable="false"
                  />
                </div>
                <div className="ml-6 sm:ml-8 md:ml-10">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 group-hover:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-orange-600 group-hover:text-white">
                    {testimonial.role}
                  </p>
                </div>
                <div className="absolute top-4 right-6 md:top-6 md:right-8">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black opacity-20 group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-2xl leading-relaxed group-hover:text-white">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
