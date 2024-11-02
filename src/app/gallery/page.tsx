
'use client';
import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import g1 from '../../../public/assets/G1.jpg';
import g2 from '../../../public/assets/G2.jpg';
import g3 from '../../../public/assets/G3.jpg';
import g4 from '../../../public/assets/G4.jpg';
import g5 from '../../../public/assets/G5.jpg';
import g6 from '../../../public/assets/G6.jpg';


// Define gallery images
const galleryData: StaticImageData[] = [
g1,g2,g3,g4,g5,g6
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-teko  tracking-wide font-bold mb-8 text-gray-800">Gallery</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 w-full max-w-6xl">
        {galleryData.map((image, index) => (
          <motion.div
            key={index}
            className="relative mb-4 overflow-hidden  rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                width={400}
                height={200}
                objectFit="cover"
                className="rounded-lg"
                unoptimized={true}
              />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
