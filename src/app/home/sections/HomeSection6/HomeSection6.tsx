"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Updated import statement
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import image1 from '../HomeSection6/assets/image1.png';
import image2 from '../HomeSection6/assets/image2.jpg';
import image3 from '../HomeSection6/assets/image3.png';
import image4 from '../HomeSection6/assets/image4.png';
import image5 from '../HomeSection6/assets/image5.jpeg';
import image6 from '../HomeSection6/assets/image6.jpg';
import Image from 'next/image';

const images = [image1, image2, image3, image4, image5,image6];

export default function HomeSection6() {
  return (
    <div className="bg-[#f3f3f3] w-full overflow-hidden py-8 px-4 lg:px-16 relative">
      <h2 className="text-3xl font-teko  tracking-wide sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 md:mb-8">Client Board</h2>
      <h3 className="text-xl font-teko  tracking-wide sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 md:mb-8">PRK Groups</h3>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev-custom absolute left-0 bottom-1/4 transform -translate-y-1/2 z-10 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div className="swiper-button-next-custom absolute right-0 bottom-1/4 transform -translate-y-1/2 z-10 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
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
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[220px] xl:min-w-[240px] h-[120px] sm:h-[140px] md:h-[160px] lg:h-[200px] xl:h-[220px] flex-shrink-0 relative bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src={img}
                  alt={`Image ${index}`}
                  className="w-full h-full object-contain p-2 rounded-md shadow-lg"
                  draggable="false"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination */}
      <div className="swiper-pagination flex justify-center mt-4" />
    </div>
  );
}
