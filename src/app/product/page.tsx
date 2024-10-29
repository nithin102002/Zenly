// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// import { StaticImageData } from 'next/image';
// import m1 from '../product/assets/M1.jpg';
// import m2 from '../product/assets/m21.jpg';
// import m3 from '../product/assets/m3.jpg';
// import m4 from '../product/assets/m4.jpg';
// import w1 from '../product/assets/w12.jpg';
// import w2 from '../product/assets/w21.jpg';
// import w3 from '../product/assets/w3.jpg';
// import w4 from '../product/assets/w4.jpg';
// import w5 from '../product/assets/w5.jpg';
// import w6 from '../product/assets/w6.jpg';
// import k1 from '../product/assets/k1.jpg';
// import k2 from '../product/assets/k2.jpg';
// import a1 from '../product/assets/A1.jpeg';
// import a2 from '../product/assets/A2.jpg';
// import u1 from '../product/assets/u1.jpg';
// import u2 from '../product/assets/u2.jpg';
// import u3 from '../product/assets/u3.jpg';
// import u4 from '../product/assets/u4.jpg';
// import u5 from '../product/assets/u5.jpg';

// const categories: string[] = ["Men's Wear", "Women's Wear", "Kids' Wear", "U-form", 'Accessories'];

// const productData: { [key: string]: StaticImageData[] } = {
//   "Men's Wear": [m1, m2, m3, m4],
//   "Women's Wear": [w1, w2, w3, w4, w5, w6],
//   "Kids' Wear": [k1, k2],
//   "U-form": [u1, u2, u3, u4, u5],
//   'Accessories': [a1, a2],
// };

// export default function Product() {
//   const [selectedCategory, setSelectedCategory] = useState<string>("Men's Wear");
//   const [slideDirection, setSlideDirection] = useState<string>('right');
//   const [transitioning, setTransitioning] = useState<boolean>(false);

//   const handleCategoryChange = (category: string) => {
//     if (category !== selectedCategory) {
//       setTransitioning(true);
//       setSlideDirection(category < selectedCategory ? 'left' : 'right');

//       setTimeout(() => {
//         setSelectedCategory(category);
//         setTransitioning(false);
//       }, 500); // Match the duration with CSS transition duration
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
//       <div className="flex space-x-6 mb-6 overflow-x-auto w-full px-4 sm:px-8 justify-start md:justify-center">
//         <div className="flex space-x-6">
//           {categories.map((category) => (
//             <div
//               key={category}
//               onClick={() => handleCategoryChange(category)}
//               className={`cursor-pointer whitespace-nowrap text-base sm:text-lg md:text-xl lg:text-2xl ${
//                 selectedCategory === category ? 'text-black' : 'text-gray-700'
//               }`}
//             >
//               {category}
//               {selectedCategory === category && (
//                 <div className="h-1 mt-1 bg-yellow-500 rounded-full" />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div
//         className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-transform duration-500 ease-in-out transform ${
//           transitioning ? (slideDirection === 'right' ? 'translate-x-full opacity-0' : '-translate-x-full opacity-0') : 'translate-x-0 opacity-100'
//         }`}
//       >
//         {(productData[selectedCategory] || []).map((image, index) => (
//           <div
//             key={index}
//             className="relative w-64 h-64 bg-gray-300 rounded-md shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105"
//           >
//             <Image
//               src={image}
//               alt={selectedCategory}
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
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
import m1 from './assets/M1.jpg';
import m2 from './assets/M2.jpg';
import m3 from './assets/M3.jpg';
import m4 from './assets/M4.jpg';
import w1 from './assets/W1.jpg';
import w2 from './assets/W2.jpg';
import w3 from './assets/W3.jpg';
import w4 from './assets/W4.jpg';
import w5 from './assets/W5.jpg';
import w6 from './assets/W6.jpg';
import k1 from './assets/K1.jpg';
import k2 from './assets/K2.jpeg';
import k3 from './assets/K3.jpg';
import u1 from './assets/U1.jpeg';
import u2 from './assets/U2.jpeg';
import u3 from './assets/U3.jpg';
import u4 from './assets/U4.jpg';
import a1 from './assets/A1.jpeg';
import a2 from './assets/A2.jpg';

const categories: string[] = ["Men's Wear", "Women's Wear", "Kids' Wear", "U-form", 'Accessories'];

const productData: Record<string, StaticImageData[]> = {
  "Men's Wear": [m1, m2, m3, m4],
  "Women's Wear": [w1, w2, w3, w4, w5, w6],
  "Kids' Wear": [k1, k2, k3],
  "U-form": [u1, u2, u3, u4],
  'Accessories': [a1, a2],
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
