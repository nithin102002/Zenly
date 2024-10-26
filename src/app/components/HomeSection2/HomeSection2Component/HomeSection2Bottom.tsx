import Image from 'next/image';
import image3 from '../assets/kids-wear.jpg';
import image4 from '../assets/accessories.jpeg';
import image5 from '../assets/uniform-wear.jpg';

export default function HomeSection2Bottom() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 px-4 lg:px-16 py-8">
      {/* Image 1 */}
      <div className="relative group w-full lg:w-1/3 h-80 overflow-hidden">
        <Image
          src={image3}
          alt="Kids Wear"
          className="w-full h-full object-cover filter group-hover:grayscale-0 grayscale transition duration-300 transform group-hover:-translate-y-2 group-hover:shadow-lg"
        />
        <div className="absolute bottom-4 left-4 right-4 bg-[#A28497] text-white p-4 flex flex-col justify-center items-center transform translate-y-full group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
          <p className="font-bold">Kid&apos;s Wear</p>
          <hr className="w-14 border-t-2 border-[#FFD700]" />
          <p className="text-sm">Comfortable and stylish clothing for children.</p>
        </div>
      </div>

      {/* Image 2 */}
      <div className="relative group w-full lg:w-1/3 h-80 overflow-hidden">
        <Image
          src={image4}
          alt="Accessories"
          className="w-full h-full object-cover filter group-hover:grayscale-0 grayscale transition duration-300 transform group-hover:-translate-y-2 group-hover:shadow-lg"
        />
        <div className="absolute bottom-4 left-4 right-4 bg-[#A28497] text-white p-4 flex flex-col justify-center items-center transform translate-y-full group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
          <p className="font-bold">Accessories</p>
          <hr className="w-14 border-t-2 border-[#FFD700]" />
          <p className="text-sm">Hats, Footwear, and more.</p>
        </div>
      </div>

      {/* Image 3 */}
      <div className="relative group w-full lg:w-1/3 h-80 overflow-hidden">
        <Image
          src={image5}
          alt="Premium Uniforms"
          className="w-full h-full object-cover filter group-hover:grayscale-0 grayscale transition duration-300 transform group-hover:-translate-y-2 group-hover:shadow-lg"
        />
        <div className="absolute bottom-4 left-4 right-4 bg-[#A28497] text-white p-4 flex flex-col justify-center items-center transform translate-y-full group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
          <p className="font-bold">Premium Uniforms</p>
          <hr className="w-14 border-t-2 border-[#FFD700]" />
          <p className="text-sm">Professional attire for every workplace.</p>
        </div>
      </div>
    </div>
  );
}
