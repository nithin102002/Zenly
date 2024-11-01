// old code just after removal of grayscale effect
// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import { StaticImageData } from 'next/image';
// import { motion } from 'framer-motion'; // Import framer-motion
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

// // Use only the "All" category images for the Gallery
// const galleryData: StaticImageData[] = [
//   m1, w1, k1, a1, u1, m2, w2, k2, a2, u2, m3, w3, u3, m4, w4, u4, w5, u5, w6
// ];

// export default function Gallery() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
//       <h1 className="text-3xl font-bold mb-8 text-gray-800">Gallery</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {galleryData.map((image, index) => (
//           <motion.div
//             key={index}
//             className="relative w-64 h-64 bg-gray-300 rounded-md shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-300 hover:via-purple-300 hover:to-pink-300"
//             initial={{ opacity: 0, y: 50 }} // Starting state
//             animate={{ opacity: 1, y: 0 }}  // Final state
//             transition={{ duration: 0.5, delay: index * 0.1 }} // Timing
//             whileHover={{ scale: 1.1 }} // Hover effect
//           >
//             <Image
//               src={image}
//               alt="Gallery Image"
//               layout="fill"
//               objectFit="cover"
              
//             />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }


//new code in which gallery section is changed little bit

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

            {/* <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300 flex items-center justify-center rounded-lg">
              <span className="text-white font-semibold text-lg">Image {index + 1}</span>
            </div> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
