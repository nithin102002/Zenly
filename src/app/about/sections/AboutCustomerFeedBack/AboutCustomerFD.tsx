'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import image1 from '../AboutCustomerFeedBack/assets/Image1.jpeg';
import image2 from '../AboutCustomerFeedBack/assets/Image2.jpeg';
import image3 from '../AboutCustomerFeedBack/assets/Image3.jpeg';

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
    role: "Fashion Blogger",
    review: "I absolutely love this clothing brand! The quality is top-notch, and I always get compliments on the pieces I wear. The fit is perfect, and they have such a great variety of styles.",
  },
  {
    name: "Shirley Smith",
    photo: image2,
    role: "Stylist",
    review: "I was impressed by the attention to detail in each garment. The fabrics feel luxurious, and the designs are chic yet comfortable. It's now my go-to brand for both work and casual outfits.",
  },
  {
    name: "Jane Doe",
    photo: image3,
    role: "Customer",
    review: "Shopping from this brand has been a game changer for me! Their clothing is not only fashionable but also incredibly comfortable. I highly recommend their collections to anyone looking for stylish pieces.",
  }
];

// Duplicate the testimonials for the looping effect
const loopedTestimonials = [...testimonials, ...testimonials];

export default function AboutCustomerFD() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth } = scrollRef.current;
      // Looping logic
      if (scrollLeft <= 0) {
        scrollRef.current.scrollLeft = scrollWidth / 2; // Reset to the middle
      } else if (scrollLeft >= scrollWidth / 2) {
        scrollRef.current.scrollLeft = 0; // Reset to the start
      }
    }
  };

  useEffect(() => {
    const slider = scrollRef.current;
    if (slider) {
      slider.scrollLeft = slider.clientWidth; // Start from the middle for seamless effect
    }

    // Auto scroll function
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1; // Adjust the speed as needed
      }
    }, 30); // Adjust the interval time for faster/slower scrolling

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  return (
    <div
      className="w-full bg-[#f3f3f3] overflow-hidden py-8 px-4 lg:px-16 cursor-grab active:cursor-grabbing"
      ref={scrollRef}
      onMouseDown={startDragging}
      onMouseMove={onDrag}
      onMouseLeave={stopDragging}
      onMouseUp={stopDragging}
      onTouchStart={startDragging}
      onTouchMove={onDrag}
      onTouchEnd={stopDragging}
      onScroll={handleScroll}
    >
      <div className="flex gap-4 w-max select-none">
        {loopedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="min-w-[420px] max-w-[450px] h-[300px] sm:min-w-[450px] sm:max-w-[500px] sm:h-[300px] bg-white rounded-lg shadow-lg p-4 relative transition-colors duration-300 hover:bg-[#282928] group"
            style={{ padding: '24px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-24 h-24 relative rounded-full overflow-hidden">
                <Image
                  src={testimonial.photo}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  draggable="false"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-black transition-colors duration-300 group-hover:text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-orange-600 transition-colors duration-300 group-hover:text-white">
                  {testimonial.role}
                </p>
              </div>
              <div className="absolute top-2 right-2">
                <svg
                  className="w-8 h-8 text-black opacity-80"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
            <p className="text-black text-base leading-relaxed transition-colors duration-300 group-hover:text-white">
              {testimonial.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

