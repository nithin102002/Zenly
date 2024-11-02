
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
          href="https://www.google.com/search?client=ms-android-google&sca_esv=b81127c47418f4ee&sxsrf=ADLYWIKCqHmsevA0epS-4VIAo2vwpTKUow:1730546060491&q=zenly+apparels+thangachiammapatti+reviews&uds=ADvngMguQLgI-yzRB5jS3dgoDg9IinXtHBLsuPWgjz8lFqj2EuiXMOyz2sSN2Q64o2tCAtx9aeW4uy0KmAaGIblN7A8AJHYFuHk1Ab7_9a3pSGkf1nT4BZFyiqGDuPS0Drj2usIYbilshicNOf9J-Vt7_el2we8IECzcm9Fdsc4hE9Enb_GeESzLVKFO_nd2oBZ3cCGSH1Y3hxlr8dQYmBI3J5PQfGugl480jhJ0oMY3n3Z-sZyJc82t_BD9lwM5DpffTNoW0f_mnIyIcO7WQF8IvQDstLB9BFoaLJ9MKrD3FeFQrVU-ENtYXw6hC1I1nggkxVWcCNItQglvccp_YibUChiTTYW6DZbSDlHtd6S96MiIaB2MWKI&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7qrn-lQ7PEjsirxnMFteyvuLPdtSxoCCsgRZUPrcWD9GwflZYT-CBxwuy8zhFoFClNdX_qLXIvrHAijLwHxROGUoqsVvKRxTxBhEQHyofbcCgY6zagfu5QmBUTzTz8RS9_5epyg%3D&sa=X&ved=2ahUKEwiYx8-5wr2JAxVwSGwGHZIyNPwQk8gLegQIJhAB&ictx=1&biw=412&bih=790&dpr=2.63#ebo=2"
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

