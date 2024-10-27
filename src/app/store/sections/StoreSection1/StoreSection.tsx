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
      <div className='w-full md:w-3/5 h-3/5 md:h-3/5 lg:h-2/3 p-4'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249128.58097165518!2d77.514994!3d10.361523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad40b4b8fc2337%3A0x9e2a53d353387ee4!2sNew%20Gandhi%20Market%2C%20Oddanchatram%2C%20Tamil%20Nadu%20624612!5e0!3m2!1sen!2sin!4v1698055823868!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0, width: '100%', height: '100%' }}
          allowFullScreen
          loading="lazy"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}

export default StoreSection;

