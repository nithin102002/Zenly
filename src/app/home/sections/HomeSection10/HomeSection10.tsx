// 'use client';
// import React, { useRef, useState, useEffect } from 'react';
// import Image, { StaticImageData } from 'next/image';
// import image1 from '../../../../../public/assets/CF1.png';
//  import image2 from '../../../../../public/assets/CF2.png';
//  import image3 from '../../../../../public/assets/CF2.png';

// interface Testimonial {
//   name: string;
//   photo: StaticImageData;
//   role: string;
//   review: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     name: "Sarah Albert",
//     photo: image1,
//     role: "Director",
//     review: "There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
//   },
//   {
//     name: "Shirley Smith",
//     photo: image2,
//     role: "Director",
//     review: "There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
//   },
//   {
//     name: "Jane Doe",
//     photo: image3,
//     role: "Developer",
//     review: "There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
//   }
// ];

// export default function HomeSection10() {
//   const scrollRef = useRef<HTMLDivElement | null>(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   const startDragging = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     setIsDragging(true);
//     const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
//     if (scrollRef.current) {
//       setStartX(pageX - scrollRef.current.offsetLeft);
//       setScrollLeft(scrollRef.current.scrollLeft);
//     }
//     stopAutoScroll(); // Stop auto-scrolling on user interaction
//   };

//   const stopDragging = () => {
//     setIsDragging(false);
//     resetAutoScrollTimeout(); // Restart timeout to enable auto-scroll again
//   };

//   const onDrag = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
//     if (scrollRef.current) {
//       const x = pageX - scrollRef.current.offsetLeft;
//       const walk = (x - startX) * 2;
//       scrollRef.current.scrollLeft = scrollLeft - walk;
//     }
//   };

//   const startAutoScroll = () => {
//     intervalRef.current = setInterval(() => {
//       if (scrollRef.current) {
//         const testimonialWidth = scrollRef.current.firstElementChild?.clientWidth || 0;
//         const scrollAmount = testimonialWidth * 0.8;
//         scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//       }
//     }, 2000);
//   };

//   const stopAutoScroll = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }
//   };

//   const resetAutoScrollTimeout = () => {
//     stopAutoScroll(); // Stop any existing auto scroll
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     // Restart the auto-scroll after 3 seconds
//     timeoutRef.current = setTimeout(() => {
//       startAutoScroll();
//     }, 3000);
//   };

//   const handleScroll = () => {
//     if (!scrollRef.current) return;
//     const scrollWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
//     if (scrollRef.current.scrollLeft <= 0) {
//       scrollRef.current.scrollLeft = scrollWidth / 3; // Reset to the middle section
//     } else if (scrollRef.current.scrollLeft >= scrollWidth) {
//       scrollRef.current.scrollLeft = scrollWidth / 3; // Reset to the middle section
//     }
//   };

//   useEffect(() => {
//     const slider = scrollRef.current;
//     if (slider) {
//       slider.scrollLeft = slider.clientWidth; // Initial scroll position to show the first testimonial
//     }
//     resetAutoScrollTimeout(); // Start the timeout for auto scroll

//     return () => {
//       stopAutoScroll();
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="bg-[#f3f3f3] w-full py-8 px-4 lg:px-16">
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-teko tracking-wide sm:text-4xl md:text-5xl font-bold text-gray-800">
//           Customer feedbacks
//         </h2>
//       </div>
//       <div
//         className="w-full overflow-hidden py-8 px-4 lg:px-16 cursor-grab active:cursor-grabbing"
//         ref={scrollRef}
//         onMouseDown={startDragging}
//         onMouseMove={onDrag}
//         onMouseLeave={stopDragging}
//         onMouseUp={stopDragging}
//         onTouchStart={startDragging}
//         onTouchMove={onDrag}
//         onTouchEnd={stopDragging}
//         onScroll={handleScroll} // Handle scroll event
//       >
//         <div className="flex gap-10 w-max select-none">
//           {/* Render testimonials */}
//           {testimonials.concat(testimonials).map((testimonial, index) => (
//             <div
//               key={index}
//               className="w-[80vw] sm:w-[70vw] md:w-[50vw] lg:max-w-[60vh] h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[40vh] bg-white rounded-lg shadow-lg p-6 relative transition-colors duration-300 hover:bg-black group flex-shrink-0"
//               style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)' }}
//             >
//               <div className="flex items-center mb-4">
//                 <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 relative rounded-full overflow-hidden">
//                   <Image
//                     src={testimonial.photo}
//                     alt={testimonial.name}
//                     layout="fill"
//                     objectFit="cover"
//                     className="object-cover"
//                     draggable="false"
//                   />
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-sm font-teko tracking-wide sm:text-base md:text-lg font-semibold text-gray-800 group-hover:text-white">
//                     {testimonial.name}
//                   </h3>
//                   <p className="text-xs font-teko tracking-wide sm:text-sm md:text-base text-orange-600 group-hover:text-white">
//                     {testimonial.role}
//                   </p>
//                 </div>
//               </div>
//               <p className="text-xs font-rubik sm:text-sm md:text-base leading-relaxed text-gray-600 group-hover:text-white">
//                 {testimonial.review}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




// import React from 'react';
// import { FaStar } from 'react-icons/fa'; // Import star icon

// // Import your images (replace with actual image imports)
// import Image, { StaticImageData } from 'next/image';
// import image1 from '../../../../../public/assets/CF1.png';
// import image2 from '../../../../../public/assets/CF2.png';

// interface Testimonial {
//   name: string;
//   photo: StaticImageData;
//   role: string;
//   review: string;
//   rating: number; // New field for star rating
// }

// const testimonials: Testimonial[] = [
//   {
//     name: "Swetha Dharshini",
//     photo: image1,
//     role: "Customer",
//     review: "Good quality nice fabric it makes a heart fulfilled. Thank you so much Zenly apparels",
//     rating: 4, // Star rating for Swetha Dharshini
//   },
//   {
//     name: "Varunya Harini",
//     photo: image2,
//     role: "Customer",
//     review: "Good quality and top notch finishing. On time completion. 100% recommended",
//     rating: 5, // Star rating for Varunya Harini
//   },
  
// ];

// const HomeSection10: React.FC = () => {
//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">What Our Customers Say</h2>
        
//         <div className="flex space-x-4 overflow-x-auto">
//           {testimonials.concat(testimonials).map((testimonial, index) => (
//             <div
//               key={index}
//               className="w-[80vw] sm:w-[70vw] md:w-[50vw] lg:max-w-[60vh] h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[40vh] bg-white rounded-lg shadow-lg p-6 relative transition-colors duration-300 hover:bg-black group flex-shrink-0"
//               style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)' }}
//             >
//               <div className="flex items-center mb-2">
//                 <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 relative rounded-full overflow-hidden">
//                   <Image
//                     src={testimonial.photo}
//                     alt={testimonial.name}
//                     layout="fill"
//                     objectFit="cover"
//                     className="object-cover"
//                     draggable="false"
//                   />
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-sm font-teko tracking-wide sm:text-base md:text-lg font-semibold text-gray-800 group-hover:text-white">
//                     {testimonial.name}
//                   </h3>
//                   <p className="text-xs font-teko tracking-wide sm:text-sm md:text-base text-orange-600 group-hover:text-white">
//                     {testimonial.role}
//                   </p>
//                 </div>
//               </div>

//               {/* Star Rating */}
//               <div className="flex mb-2">
//                 {Array.from({ length: 5 }, (_, i) => (
//                   <FaStar
//                     key={i}
//                     color={i < testimonial.rating ? "#FFD700" : "#E0E0E0"} // Gold for filled stars, light gray for empty stars
//                   />
//                 ))}
//               </div>

//               <p className="text-xs font-rubik sm:text-sm md:text-base leading-relaxed text-gray-600 group-hover:text-white">
//                 {testimonial.review}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeSection10;











"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Updated import statement
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import Image, { StaticImageData } from 'next/image';
import image1 from '../../../../../public/assets/CF1.png';
import image2 from '../../../../../public/assets/CF2.png';

interface Testimonial {
  name: string;
  photo: StaticImageData;
  role: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Swetha Dharshini",
    photo: image1,
    role: "Customer",
    review: "Good quality nice fabric it makes a heart fulfilled. Thank you so much Zenly apparels",
    rating: 4,
  },
  {
    name: "Varunya Harini",
    photo: image2,
    role: "Customer",
    review: "Good quality and top notch finishing. On time completion. 100% recommended",
    rating: 5,
  },
  {
    name: "Swetha Dharshini",
    photo: image1,
    role: "Customer",
    review: "Good quality nice fabric it makes a heart fulfilled. Thank you so much Zenly apparels",
    rating: 4,
  },
  {
    name: "Varunya Harini",
    photo: image2,
    role: "Customer",
    review: "Good quality and top notch finishing. On time completion. 100% recommended",
    rating: 5,
  },
];

export default function HomeSection10() {
  return (
    <div className="bg-[#f3f3f3] w-full overflow-hidden py-8 px-4 lg:px-16 relative">
      <h2 className="text-3xl font-teko tracking-wide sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 md:mb-8">Customer Feedbacks</h2>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev-custom absolute left-0 bottom-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div className="swiper-button-next-custom absolute right-0 bottom-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="w-[80vw] sm:w-[70vw] md:w-[50vw] lg:max-w-[60vh] h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[40vh] bg-white rounded-lg shadow-lg p-6 relative transition-colors duration-300 group flex-shrink-0">
              <div className="flex items-center">
                <Image src={testimonial.photo} alt={testimonial.name} width={50} height={50} className="rounded-full mr-3" />
                <div>
                  <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-2 mt-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    color={i < testimonial.rating ? "#FFD700" : "#E0E0E0"}
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm">{testimonial.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination */}
      <div className="swiper-pagination flex justify-center mt-4" />

      <div className="flex justify-center mt-6">
        <a
          href="https://maps.app.goo.gl/atjzxZt5NaqWTPi77"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition duration-300"
        >
          Leave a Review
        </a>
      </div>
    </div>
  );
}

