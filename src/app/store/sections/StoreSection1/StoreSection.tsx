import React from 'react';

const StoreSection = () => {
  const shopAddress = 'New Gandhi Market, Oddanchatram, Dindigul, Tamil Nadu- 624612, India';
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(shopAddress)}`;

  const VisitUsCard = () => (
    <div className='flex flex-col justify-between items-start w-full md:w-[50%] lg:w-[40%] h-[350px] p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6 md:mb-0 pt-8'> {/* Increased width on larger screens */}
      <h1 className='text-3xl font-teko tracking-wide font-bold text-black mb-4'>Visit Us</h1>
      <p className='text-lg font-rubik text-gray-800 mb-2'>
        <span className='font-semibold font-teko tracking-wide'>Zenly Apparels</span><br />
        New Gandhi Market,<br />
        Oddanchatram,<br />
        Dindigul,<br />
        Tamil Nadu- 624612, India
      </p>
      <p className='text-gray-600 font-rubik mb-2'>📞 Contact: <span className='font-semibold'>(91) 6379645725</span></p>
      <a 
        href={googleMapsUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className='mt-4 px-4 py-2 bg-[#FEAB17] font-teko tracking-wide text-black font-medium rounded-md hover:bg-[#d79a14] transition duration-200'
      >
        Get Directions
      </a>
    </div>
  );

  return (
    <div className='flex flex-col items-center w-full p-4 bg-[#f3f3f3]'>
      {/* Store Details Section */}
      <div className='flex flex-col md:flex-row justify-center items-center w-full gap-6 mt-4 mb-6'>
        <VisitUsCard />
      </div>

      {/* Google Maps Embed Section */}
      <div className='w-full h-80 sm:h-[60vh] md:h-[70vh] lg:h-[80vh] p-4'>
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1kVHosjvn0B1mbACtktmWn30AL0hrNyY&ehbc=2E312F"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}

export default StoreSection;
