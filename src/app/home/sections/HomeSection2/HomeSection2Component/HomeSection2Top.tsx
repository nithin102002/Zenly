import Image from 'next/image';
import image1 from '../assets/mens-wear.jpg';
import image2 from '../assets/womens-wear.jpg';

export default function HomeSection2Top() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 px-4 lg:px-16 py-8">
      {/* Left Part */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-6xl font-bold mb-4">
          DISCOVER TIMELESS FASHION CRAFTED WITH CARE FOR YOU.
        </h2>
        <p className="text-xl font-normal">
          We are committed to providing our customers with exceptional designs
          and quality garments.
        </p>
      </div>

      {/* Right Part */}
      <div className="lg:w-1/2 flex flex-col lg:flex-row gap-6">
        <div className="relative group w-full lg:w-1/2 h-64 sm:h-80 lg:h-80 overflow-hidden">
          <Image
            src={image1}
            alt="mens-wear"
            className="w-full h-full object-cover filter group-hover:grayscale-0 grayscale transition duration-300 transform group-hover:-translate-y-2 group-hover:shadow-lg"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-[#171717] text-white  p-4 flex flex-col justify-center items-center transform translate-y-full group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
            <p className="font-bold">Men&apos;s Wear.</p>
            <hr className="w-14 border-t-2 border-[#FFD700]" />
            <p className="text-sm">Sophisticated collection for modern gentlemen</p>
          </div>
        </div>

        <div className="relative group w-full lg:w-1/2 h-64 sm:h-80 lg:h-80 overflow-hidden">
          <Image
            src={image2}
            alt="Women's Wear"
            className="w-full h-full object-cover filter group-hover:grayscale-0 grayscale transition duration-300 transform group-hover:-translate-y-2 group-hover:shadow-lg"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-[#171717] text-white  p-4 flex flex-col justify-center items-center transform translate-y-full group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
            <p className="font-bold">Women&apos;s Wear.</p>
            <hr className="w-14 border-t-2 border-[#FFD700]" />
            <p className="text-sm">Elegant designs for the modern woman.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
