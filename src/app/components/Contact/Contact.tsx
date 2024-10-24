import React from 'react';

const Contact = () => {
  return (
    <div className='h-auto w-full bg-[#161617] p-4 sm:p-8'>
      <div className='flex items-center justify-center'>
        <h1 className='text-white text-lg sm:text-xl md:text-3xl lg:text-4xl pt-4 sm:pt-6 text-center'>
          "Step into Style – Let's Connect and Make Your Wardrobe Unforgettable!"
        </h1>
      </div>
      <div className='flex flex-col sm:flex-row items-center justify-around h-auto w-full mt-6 sm:mt-10'>
        <div className='text-white text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-0'>
          <div className="mb-2">Zenly</div>
        </div>

        <div className='text-white text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-0'>
          <div className="mb-2 text-center sm:text-left">
            New Gandhi Market,<br /> Oddanchatram,<br /> Dindigul,<br /> Tamilnadu- 624612, India
          </div>
        </div>

        <div className='text-white text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-0'>
          <div className="mb-2 text-center sm:text-left">Call: (91) 6379645725</div>
          <div className="mb-2 text-center sm:text-left">Email: admin@zenlyapparels.in</div>

          <div className='flex flex-col items-center sm:items-start mt-4'>
            <a href="https://facebook.com/yourpage" className='flex items-center mb-2 hover:text-blue-600' target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.483v-9.284h-3.118v-3.622h3.118v-2.671c0-3.086 1.887-4.766 4.644-4.766 1.321 0 2.458.099 2.789.143v3.234l-1.914.001c-1.501 0-1.794.713-1.794 1.759v2.308h3.587l-.467 3.622h-3.12v9.284h6.116c.732 0 1.324-.592 1.324-1.324v-21.351c0-.733-.592-1.325-1.325-1.325z"/>
              </svg>
              Facebook
            </a>

            <a href="https://instagram.com/yourpage" className='flex items-center hover:text-pink-500' target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.344 3.608 1.319.976.976 1.257 2.243 1.319 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.344 2.633-1.319 3.608-.976.976-2.243 1.257-3.608 1.319-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.344-3.608-1.319-.976-.976-1.257-2.243-1.319-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.344-2.633 1.319-3.608.976-.976 2.243-1.257 3.608-1.319 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.593.073-2.685.34-3.637 1.291-.952.953-1.218 2.044-1.291 3.637-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.073 1.593.34 2.685 1.291 3.637.953.952 2.044 1.218 3.637 1.291 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.593-.073 2.685-.34 3.637-1.291.952-.953 1.218-2.044 1.291-3.637.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.073-1.593-.34-2.685-1.291-3.637-.953-.952-2.044-1.218-3.637-1.291-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.163 2.76-6.163 6.163s2.76 6.163 6.163 6.163 6.163-2.76 6.163-6.163-2.76-6.163-6.163-6.163zm0 10.123c-2.185 0-3.96-1.774-3.96-3.96s1.774-3.96 3.96-3.96 3.96 1.774 3.96 3.96-1.774 3.96-3.96 3.96zm6.406-11.845c0 .796-.646 1.441-1.441 1.441s-1.441-.646-1.441-1.441.646-1.441 1.441-1.441 1.441.646 1.441 1.441z"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
