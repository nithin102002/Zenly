"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import image1 from '../HomeSection6/assets/image1.png';
import image2 from '../HomeSection6/assets/image2.jpg';
import image3 from '../HomeSection6/assets/image3.png';
import image4 from '../HomeSection6/assets/image4.png';
import image5 from '../HomeSection6/assets/image5.jpeg';
import Image from 'next/image';

const images = [image1, image2, image3, image4, image5];

export default function HomeSection6() {
  return (
    <div className="bg-[#f3f3f3] w-full overflow-hidden py-8 px-4 lg:px-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 md:mb-8">Client Board</h2>
      <h3 className="text-2xl text-center mb-6">PRK Groups</h3>
      <Swiper
        spaceBetween={10} // Space for better alignment
        slidesPerView={2} // Show 2 slides for smaller screens by default
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
            spaceBetween: 30, // Increased for larger screens
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
          el: '.swiper-pagination', // Custom pagination element
        }}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[220px] xl:min-w-[240px] h-[120px] sm:h-[140px] md:h-[160px] lg:h-[200px] xl:h-[220px] flex-shrink-0 relative bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src={img}
                  alt={`Image ${index}`} // Corrected line
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
