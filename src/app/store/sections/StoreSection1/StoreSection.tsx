import React from 'react';

const StoreSection = () => {
  // Define the address for the directions
  const shopAddress = 'New Gandhi Market, Oddanchatram, Dindigul, Tamil Nadu- 624612, India';
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(shopAddress)}`;

  return (
    <div className='h-screen w-full flex flex-col md:flex-row justify-center items-center p-4 bg-[#f3f3f3]'>
      {/* Store Details Section */}
      <div className='flex flex-col justify-center items-start w-full md:w-2/5 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
        <h1 className='text-3xl font-bold text-black mb-4'>Visit Us</h1>
        <p className='text-lg text-gray-800 mb-2'>
          <span className='font-semibold'>Zenly Apparels</span><br />
          New Gandhi Market,<br />
          Oddanchatram,<br />
          Dindigul,<br />
          Tamil Nadu- 624612, India
        </p>
        <p className='text-gray-600 mb-2'>📞 Contact: <span className='font-semibold'>(91) 6379645725</span></p>
        <a 
          href={googleMapsUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className='mt-4 px-4 py-2 bg-[#FEAB17] text-black font-semibold rounded-md hover:bg-[#d79a14] transition duration-200'
        >
          Get Directions
        </a>
      </div>

      {/* Google Maps Embed Section */}
      <div className='w-full md:w-3/5 h-3/5 md:h-3/5 lg:h-2/3 p-4 relative'>
        {/* Add a div to act as an overlay to hide the top */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '50px',
          backgroundColor: '#f3f3f3',
          zIndex: 1
        }}></div>
        
        {/* Replace the following iframe with your custom map embed code */}
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1kVHosjvn0B1mbACtktmWn30AL0hrNyY&ehbc=2E312F"
          width="600"
          height="450"
          style={{ border: 0, width: '100%', height: '100%', position: 'relative', top: '-10px' }}
          allowFullScreen
          loading="lazy"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}

export default StoreSection;
