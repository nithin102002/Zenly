
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faExpand, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Swiper as SwiperClass } from 'swiper/types';
import m1 from '../../../public/assets/M1.jpg';
import m2 from '../../../public/assets/M2.jpeg';
import m3 from '../../../public/assets/M3.jpg';
import m4 from '../../../public/assets/M4.jpg';
import m5 from '../../../public/assets/M5.jpg';
import m6 from '../../../public/assets/M6.jpg';
import m7 from '../../../public/assets/M7.jpg';
import m8 from '../../../public/assets/M8.jpeg';
import m9 from '../../../public/assets/M9.jpg';
import m10 from '../../../public/assets/M10.jpg';
import m11 from '../../../public/assets/M11.jpg';
import m12 from '../../../public/assets/M12.jpg';
import m13 from '../../../public/assets/M13.jpg';
import m14 from '../../../public/assets/M14.jpg';
import m15 from '../../../public/assets/M15.jpg';
import m16 from '../../../public/assets/M16.jpg';
import m17 from '../../../public/assets/M17.jpeg';
import m18 from '../../../public/assets/M18.jpg';
import m19 from '../../../public/assets/M19.jpg';
import m20 from '../../../public/assets/M20.jpg';

import w1 from '../../../public/assets/W1.jpg';
import w2 from '../../../public/assets/W2.jpg';
import w3 from '../../../public/assets/W3.jpg';
import w4 from '../../../public/assets/W4.jpg';
import w5 from '../../../public/assets/W5.jpg';
import w6 from '../../../public/assets/W6.jpg';
import w7 from '../../../public/assets/W7.jpeg';
import w8 from '../../../public/assets/W8.jpg';
import w9 from '../../../public/assets/W9.jpg';
import w10 from '../../../public/assets/W10.jpg';
import w11 from '../../../public/assets/W11.jpg';
import w12 from '../../../public/assets/W12.jpg';
import w13 from '../../../public/assets/W13.jpg';
import w14 from '../../../public/assets/W14.jpeg';
import w15 from '../../../public/assets/W15.jpg';
import w16 from '../../../public/assets/W16.jpg';
import w17 from '../../../public/assets/W17.jpg';
import w18 from '../../../public/assets/W18.jpg';
import w19 from '../../../public/assets/W19.jpg';
import w20 from '../../../public/assets/W20.jpeg';

import k1 from '../../../public/assets/K1.jpeg';
import k2 from '../../../public/assets/K2.jpeg';
import k3 from '../../../public/assets/K3.jpeg';
import k4 from '../../../public/assets/K4.jpeg';
import k5 from '../../../public/assets/K5.jpeg';
import k6 from '../../../public/assets/K6.jpeg';
import k7 from '../../../public/assets/K7.jpeg';
import k8 from '../../../public/assets/K8.jpeg';
import k9 from '../../../public/assets/K9.jpeg';
import k10 from '../../../public/assets/K10.jpeg';
import k11 from '../../../public/assets/K11.jpeg';

import u1 from '../../../public/assets/U1.jpg';
import u2 from '../../../public/assets/U2.jpg';
import u3 from '../../../public/assets/U3.jpg';
import u4 from '../../../public/assets/U4.jpeg';
import u5 from '../../../public/assets/U5.jpg';
import u6 from '../../../public/assets/U6.jpg';
import u7 from '../../../public/assets/U7.jpg';
import u8 from '../../../public/assets/U8.webp';
import u9 from '../../../public/assets/U9.jpg';
import u10 from '../../../public/assets/U10.jpg';
import u11 from '../../../public/assets/U11.jpg';
import u12 from '../../../public/assets/U12.webp';
import u13 from '../../../public/assets/U13.jpg';
import u14 from '../../../public/assets/U14.jpg';
import u15 from '../../../public/assets/U15.jpg';
import u16 from '../../../public/assets/U16.jpg';
import u17 from '../../../public/assets/U17.jpg';
import u18 from '../../../public/assets/U18.jpg';
import u19 from '../../../public/assets/U19.jpg';
import u20 from '../../../public/assets/U20.jpg';
import u21 from '../../../public/assets/U21.jpg';
import u22 from '../../../public/assets/U22.jpg';
import u23 from '../../../public/assets/U23.jpg';
import u24 from '../../../public/assets/U24.jpeg';
import u25 from '../../../public/assets/U25.jpg';

import a1 from '../../../public/assets/A1.jpg';
import a2 from '../../../public/assets/A2.jpg';
import a3 from '../../../public/assets/A3.jpg';
import a4 from '../../../public/assets/A4.jpg';
import a5 from '../../../public/assets/A5.jpg';
import a6 from '../../../public/assets/A6.jpg';
import a7 from '../../../public/assets/A7.jpg';
import a8 from '../../../public/assets/A8.jpg';
import a9 from '../../../public/assets/A9.jpg';
import a10 from '../../../public/assets/A10.jpg';
import a11 from '../../../public/assets/A11.jpg';
import a12 from '../../../public/assets/A12.jpg';
import a13 from '../../../public/assets/A13.jpg';
import a14 from '../../../public/assets/A14.jpg';
import a15 from '../../../public/assets/A15.jpg';


const categories: string[] = ["Men's Wear", "Women's Wear", "Kids' Wear", "U-form", 'Accessories'];

const productData: Record<string, StaticImageData[]> = {
  "Men's Wear": [m1, m2, m3, m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20],
  "Women's Wear": [w1, w2, w3, w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20],
  "Kids' Wear": [k1, k2, k3, k4,k5,k6,k7,k8,k9,k10,k11],
  "U-form": [u1, u2, u3, u4,u5,u6,u7,u8,u9,u10,u11,u12,u13,u14,u15,u16,u17,u18,u19,u20,u21,u22,u23,u24,u25],
  'Accessories': [a1, a2, a3, a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15],
};

export default function Product() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Men's Wear");
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);
  const [showGalleryModal, setShowGalleryModal] = useState<boolean>(false);

  const handleCategoryChange = (category: string) => {
    if (category !== selectedCategory) {
      setTimeout(() => {
        setSelectedCategory(category);
      }, 500);
    }
  };

  const openImageModal = (index: number) => {
    setCurrentImageIndex(index);
    setShowGalleryModal(true);
    setIsPlaying(false);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const closeModal = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setShowGalleryModal(false);
    setCurrentImageIndex(null);
    setIsPlaying(false);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
      setIsPlaying(false);
    } else {
      const id = setInterval(() => {
        if (swiperInstance) {
          swiperInstance.slideNext();
        }
      }, 2000);
      setIntervalId(id);
      setIsPlaying(true);
    }
  };

  const enterFullscreen = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        await elem.requestFullscreen();
      } else if ((elem as HTMLElement & { webkitRequestFullscreen?: () => Promise<void> }).webkitRequestFullscreen) {
        await (elem as HTMLElement & { webkitRequestFullscreen: () => Promise<void> }).webkitRequestFullscreen();
      } else if ((elem as HTMLElement & { msRequestFullscreen?: () => Promise<void> }).msRequestFullscreen) {
        await (elem as HTMLElement & { msRequestFullscreen: () => Promise<void> }).msRequestFullscreen();
      }
    } catch (error) {
      console.error('Failed to enter fullscreen:', error);
    }
  };

  // Cleanup interval on unmount or when modal closes
  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  // Stop slideshow when modal closes
  useEffect(() => {
    if (!showGalleryModal && intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setIsPlaying(false);
    }
  }, [showGalleryModal, intervalId]);

  return (
    <div className="min-h-screen font-teko tracking-wide bg-gray-100 flex flex-col items-center p-8">
      {/* Categories */}
      <div className="flex space-x-6 mb-6 overflow-x-auto w-full px-4 sm:px-8 justify-start md:justify-center">
        <div className="flex space-x-6">
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`cursor-pointer whitespace-nowrap text-base sm:text-lg md:text-xl lg:text-2xl ${
                selectedCategory === category ? 'text-black' : 'text-gray-700'
              }`}
            >
              {category}
              {selectedCategory === category && (
                <div className="h-1 mt-1 bg-yellow-500 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-transform duration-500 ease-in-out">
        {(productData[selectedCategory] || []).map((image, index) => (
          <div
            key={index}
            className="relative w-64 h-64 bg-gray-300 rounded-md shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105 cursor-pointer"
            onClick={() => openImageModal(index)}
          >
            <Image
              src={image}
              alt={selectedCategory}
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Gallery Modal */}
      {showGalleryModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div onClick={(e) => e.stopPropagation()} className="relative w-[90vw] h-[90vh]">
            {/* Control buttons */}
            <div className="absolute top-5 right-5 flex space-x-4 z-50">
              <button
                onClick={togglePlay}
                className="text-white text-3xl hover:text-gray-300 transition-colors"
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
              </button>
              <button
                onClick={enterFullscreen}
                className="text-white text-3xl hover:text-gray-300 transition-colors"
                aria-label="Enter fullscreen"
              >
                <FontAwesomeIcon icon={faExpand} />
              </button>
              <button
                onClick={closeModal}
                className="text-white text-3xl hover:text-gray-300 transition-colors"
                aria-label="Close gallery"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            {/* Swiper */}
            <Swiper
              modules={[Navigation]}
              navigation
              initialSlide={currentImageIndex || 0}
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => setCurrentImageIndex(swiper.activeIndex)}
              loop
              className="w-full h-full"
            >
              {productData[selectedCategory].map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src={img}
                      alt={`${selectedCategory} image ${idx + 1}`}
                      layout="fill"
                      objectFit="contain"
                      className="object-contain rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}
