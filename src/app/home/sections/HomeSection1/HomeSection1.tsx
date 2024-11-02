// "use client";

// import React, { useEffect } from 'react';
// import Link from 'next/link';
// import gsap from 'gsap';

// const Section1 = () => {
//   useEffect(() => {
//     // GSAP animations for fade-in and slide-up effects
//     gsap.fromTo(
//       ".fade-in", 
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 1.5, stagger: 0.3, ease: "power2.out" }
//     );

//     gsap.fromTo(
//       ".button-scale", 
//       { scale: 0.8 },
//       { scale: 1, duration: 0.8, ease: "elastic.out(1, 0.3)", delay: 1.5 }
//     );
//   }, []);

//   return (
//     <div className="relative h-[90vh] w-full flex flex-col items-center justify-center px-8 sm:px-4 lg:px-20 overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('https://imgs.search.brave.com/zXDZ_-f6edh4YQrgm49PlT9MpN6Li7h-Bxcd6IZSU_U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjQyMDI1/MjY1NTktZTIxZTlj/MGZiNDZhP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjAuMyZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1Y/eDhabUZ6YUdsdmJu/eGxibnd3Zkh3d2ZI/eDhNQT09')",
//         }}
//       />

//       {/* Whitish Overlay */}
//       <div
//         className="absolute inset-0 bg-white"
//         style={{
//           opacity: 0.6, // Increase opacity for a more whitish effect
//         }}
//       ></div>

//       <div className="relative z-10 text-center">
//         <h5 className="text-base font-teko  tracking-wide sm:text-2xl lg:text-3xl xl:text-5xl text-black font-semibold mb-4 fade-in">
//           Welcome to Zenly Apparels
//         </h5>
//       </div>
//       <h1 className="text-2xl font-teko  tracking-wide sm:text-5xl lg:text-8xl xl:text-8xl font-bold mb-4 text-black z-10 fade-in">
//         A world of Quality and
//       </h1>
//       <h1 className="text-2xl font-teko  tracking-wide sm:text-5xl lg:text-8xl xl:text-8xl font-bold mb-6 text-black z-10 fade-in">
//         Endless Designs
//       </h1>
      
//       {/* Discover More Button with Link */}
//       <div className="mt-7 z-10">
//         <Link href="/product"> {/* Change '/about' to your desired path */}
//           <button className="bg-[#FEAB17] hover:bg-[#e59e14] font-teko  tracking-wide transition duration-300 ease-in-out px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-medium shadow-md transform button-scale">
//             Discover More
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Section1;




// "use client";

// import React, { useEffect } from 'react';
// import Link from 'next/link';
// import gsap from 'gsap';

// const Section1 = () => {
//   useEffect(() => {
//     // GSAP animations for fade-in and slide-up effects on text
//     gsap.fromTo(
//       ".fade-in", 
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 1.5, stagger: 0.3, ease: "power2.out" }
//     );

//     // Scale-up effect for the button
//     gsap.fromTo(
//       ".button-scale", 
//       { scale: 0.8 },
//       { scale: 1, duration: 0.8, ease: "elastic.out(1, 0.3)", delay: 1.5 }
//     );

//     // Subtle background zoom effect
//     gsap.fromTo(
//       ".background-zoom",
//       { scale: 1 },
//       { scale: 1.05, duration: 5, ease: "power2.inOut", repeat: -1, yoyo: true }
//     );

//   }, []);

//   return (
//     <div className="relative h-[90vh] w-full flex flex-col items-center justify-center px-8 sm:px-4 lg:px-20 overflow-hidden">
//       {/* Background Image with zoom effect */}
//       <div
//         className="absolute inset-0 bg-cover bg-center background-zoom"
//         style={{
//           backgroundImage: "url('https://imgs.search.brave.com/zXDZ_-f6edh4YQrgm49PlT9MpN6Li7h-Bxcd6IZSU_U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjQyMDI1/MjY1NTktZTIxZTlj/MGZiNDZhP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjAuMyZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1Y/eDhabUZ6YUdsdmJu/eGxibnd3Zkh3d2ZI/eDhNQT09')",
//         }}
//       />

//       {/* Whitish Overlay */}
//       <div
//         className="absolute inset-0 bg-white"
//         style={{
//           opacity: 0.6, // Increase opacity for a more whitish effect
//         }}
//       ></div>

//       <div className="relative z-10 text-center">
//         <h5 className="text-base font-teko tracking-wide sm:text-2xl lg:text-3xl xl:text-5xl text-black font-semibold mb-4 fade-in">
//           Welcome to Zenly Apparels
//         </h5>
//       </div>
//       <h1 className="text-2xl font-teko tracking-wide sm:text-5xl lg:text-8xl xl:text-8xl font-bold mb-4 text-black z-10 fade-in">
//         A world of Quality and
//       </h1>
//       <h1 className="text-2xl font-teko tracking-wide sm:text-5xl lg:text-8xl xl:text-8xl font-bold mb-6 text-black z-10 fade-in">
//         Endless Designs
//       </h1>
      
//       {/* Discover More Button with Link */}
//       <div className="mt-7 z-10">
//         <Link href="/product">
//           <button className="bg-[#FEAB17] hover:bg-[#e59e14] font-teko tracking-wide transition duration-300 ease-in-out px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-medium shadow-md transform button-scale">
//             Discover More
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Section1;

//belwo is arban's animation code

// "use client";

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import gsap from 'gsap';

// const Section1 = () => {
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     // Set up the media query to detect screen size
//     const mediaQuery = window.matchMedia("(max-width: 640px)");
//     const handleMediaQueryChange = (event) => {
//       setIsSmallScreen(event.matches);
//     };

//     // Initial check
//     handleMediaQueryChange(mediaQuery);
//     mediaQuery.addEventListener('change', handleMediaQueryChange);

//     // GSAP animations for fade-in and slide-up effects
//     gsap.fromTo(
//       ".fade-in", 
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 1.5, stagger: 0.3, ease: "power2.out" }
//     );

//     gsap.fromTo(
//       ".button-scale", 
//       { scale: 0.8 },
//       { scale: 1, duration: 0.8, ease: "elastic.out(1, 0.3)", delay: 1.5 }
//     );

//     // GSAP timeline for text animation with loop
//     const textAnimationTimeline = gsap.timeline({ repeat: -1, repeatDelay: 2 });
//     textAnimationTimeline
//       .fromTo(
//         ".fade-in-text",
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
//       )
//       .to(".fade-in-text", { opacity: 0, duration: 1, ease: "power2.in" });

//     // If it's a small screen, skip the sliding images
//     if (!isSmallScreen) {
//       // GSAP timeline for left-to-right sliding image
//       const slideInTimelineLeft = gsap.timeline({ repeat: -1, repeatDelay: 2 });
//       slideInTimelineLeft.fromTo(
//         ".slide-in-image",
//         { opacity: 0, x: "-100%" },
//         { opacity: 1, x: "0%", duration: 2, ease: "power2.out" }
//       ).to(".slide-in-image", { opacity: 0, duration: 1, ease: "power2.in" });

//       // Right-to-left sliding animation for larger screens
//       const slideInTimelineRight = gsap.timeline({ repeat: -1, repeatDelay: 2 });
//       slideInTimelineRight.fromTo(
//         ".slide-in-image-right",
//         { opacity: 0, x: "100%" },
//         { opacity: 1, x: "0%", duration: 2, ease: "power2.out" }
//       ).to(".slide-in-image-right", { opacity: 0, duration: 1, ease: "power2.in" });

//       // GSAP timeline for top-to-bottom sliding image
//       const slideInTimelineTopToBottom = gsap.timeline({ repeat: -1, repeatDelay: 2 });
//       slideInTimelineTopToBottom.fromTo(
//         ".slide-in-image-top-bottom",
//         { opacity: 0, y: "-100%" },
//         { opacity: 1, y: "0%", duration: 2, ease: "power2.out" }
//       ).to(".slide-in-image-top-bottom", { opacity: 0, duration: 1, ease: "power2.in" });
//     }

//     // Cleanup listener
//     return () => {
//       mediaQuery.removeEventListener('change', handleMediaQueryChange);
//     };
//   }, [isSmallScreen]);

//   return (
//     <div className="relative h-[90vh] w-full flex flex-col items-center justify-center px-8 sm:px-4 lg:px-20 overflow-hidden">
//       {/* Background Image Layer */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/assets/background.jpg')", // Main background image
//           zIndex: 1,
//         }}
//       ></div>

//       {/* Only render sliding images if it's not a small screen */}
//       {!isSmallScreen && (
//         <>
//           {/* Sliding Image from Left to Right */}
//           <div
//             className="absolute inset-y-0 left-0 w-full sm:w-1/5 md:w-1/4 h-full bg-cover bg-left slide-in-image"
//             style={{
//               backgroundImage: "url('/assets/shape-1.jpg')", // First sliding image
//               zIndex: 2,
//               height: '80%', // Adjust height for mobile
//             }}
//           ></div>

//           {/* Sliding Image from Right to Left */}
//           <div
//             className="absolute inset-y-0 right-0 w-1/4 sm:w-1/5 md:w-1/4 h-full bg-cover bg-right slide-in-image-right"
//             style={{
//               backgroundImage: "url('/assets/b-2-shape-1.jpg')", // Second sliding image
//               zIndex: 2,
//               transform: "rotate(180deg)", // Fixed rotation
//               border: "none", // Ensure no border
//               outline: "none", // Ensure no outline
//               backgroundSize: "cover", // Ensure the image covers the div
//               backgroundPosition: "center", // Center the image to avoid edges
//             }}
//           ></div>

//           {/* Sliding Image from Top to Bottom */}
//           <div
//             className="absolute inset-y-0 left-0 w-1/5 h-full bg-cover slide-in-image-top-bottom"
//             style={{
//               backgroundImage: "url('/assets/b-2-shape-5.jpg')", // Image sliding from top to bottom
//               zIndex: 2,
//               backgroundSize: "cover", // Ensure the image covers the div
//               backgroundPosition: "center", // Center the image to avoid edges
//             }}
//           ></div>
//         </>
//       )}

//       {/* Foreground Content */}
//       <div className="relative z-10 text-center">
//         <h5 className="text-base font-teko tracking-wide sm:text-2xl lg:text-3xl xl:text-5xl text-black font-semibold mb-4 fade-in">
//           Welcome to Zenly Apparels
//         </h5>
//         <h1 className="text-2xl font-teko tracking-wide sm:text-5xl lg:text-8xl xl:text-8xl font-bold mb-4 text-black z-10 fade-in fade-in-text">
//           A world of Quality and
//         </h1>
//         <h1 className="text-2xl font-teko tracking-wide sm:text-5xl lg:text-8xl xl:text-8xl font-bold mb-6 text-black z-10 fade-in fade-in-text">
//           Endless Designs
//         </h1>
//       </div>
      
//       {/* Discover More Button with Link */}
//       <div className="mt-7 z-10">
//         <Link href="/product">
//           <button className="bg-[#FEAB17] hover:bg-[#e59e14] font-teko tracking-wide transition duration-300 ease-in-out px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-medium shadow-md transform button-scale">
//             Discover More
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Section1;


// full working and integrated js code
"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

const Section1: React.FC = () => {
  // Initialize with null to avoid SSR mismatch
  const [isSmallScreen, setIsSmallScreen] = useState<boolean | null>(null);

  useEffect(() => {
    // Set initial screen size
    setIsSmallScreen(window.innerWidth <= 640);

    // Handle resize
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);

    // Initialize common animations
    const initCommonAnimations = () => {
      gsap.fromTo(
        ".fade-in",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.5, stagger: 0.3, ease: "power2.out" }
      );

      gsap.fromTo(
        ".button-scale",
        { scale: 0.8 },
        { scale: 1, duration: 0.8, ease: "elastic.out(1, 0.3)", delay: 1.5 }
      );

      gsap.fromTo(
        ".background-zoom",
        { scale: 1 },
        { scale: 1.05, duration: 5, ease: "power2.inOut", repeat: -1, yoyo: true }
      );

      const textAnimationTimeline = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      textAnimationTimeline
        .fromTo(
          ".fade-in-text",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
        )
        .to(".fade-in-text", { opacity: 0, duration: 1, ease: "power2.in" });
    };

    // Initialize large screen animations
    const initLargeScreenAnimations = () => {
      if (isSmallScreen) return;

      const slideInTimelineLeft = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      slideInTimelineLeft
        .fromTo(
          ".slide-in-image",
          { opacity: 0, x: "-100%" },
          { opacity: 1, x: "0%", duration: 2, ease: "power2.out" }
        )
        .to(".slide-in-image", { opacity: 0, x: "-100%", duration: 1, ease: "power2.in" });

      const slideInTimelineRight = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      slideInTimelineRight
        .fromTo(
          ".slide-in-image-right",
          { opacity: 0, x: "100%" },
          { opacity: 1, x: "0%", duration: 2, ease: "power2.out" }
        )
        .to(".slide-in-image-right", { opacity: 0, x: "100%", duration: 1, ease: "power2.in" });

      const slideInTimelineTopToBottom = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      slideInTimelineTopToBottom
        .fromTo(
          ".slide-in-image-top-bottom",
          { opacity: 0, y: "-100%" },
          { opacity: 1, y: "0%", duration: 2, ease: "power2.out" }
        )
        .to(".slide-in-image-top-bottom", { opacity: 0, y: "-100%", duration: 1, ease: "power2.in" });
    };

    // Initialize animations only after screen size is determined
    if (isSmallScreen !== null) {
      initCommonAnimations();
      initLargeScreenAnimations();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      // Kill all GSAP animations on cleanup
      gsap.killTweensOf("*");
    };
  }, [isSmallScreen]); // Only re-run if screen size changes

  // Don't render anything until we know the screen size
  if (isSmallScreen === null) {
    return <div className="h-[90vh]"></div>; // Placeholder to prevent layout shift
  }

  return (
    <div className="relative h-[90vh] w-full flex flex-col items-center justify-center px-8 sm:px-3 lg:px-20 overflow-hidden">
      {/* Background Image Layer with Zoom Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center background-zoom bg-white opacity-50"
        style={{
          backgroundImage: "url('/assets/hero-bg.jpg')",
          zIndex: 1,
        }}
      />

      {/* Only render sliding images for larger screens */}
      {!isSmallScreen && (
        <>
          <div
            className="absolute inset-y-0 left-0 w-full sm:w-1/5 md:w-1/4 h-full bg-cover bg-left slide-in-image"
            style={{
              backgroundImage: "url('/assets/shape-1.jpg')",
              zIndex: 2,
              height: '80%',
            }}
          />
          <div
            className="absolute inset-y-0 right-0 w-1/4 sm:w-1/5 md:w-1/4 h-full bg-cover bg-right slide-in-image-right"
            style={{
              backgroundImage: "url('/assets/b-2-shape-1.jpg')",
              zIndex: 2,
              transform: "rotate(180deg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="absolute inset-y-0 left-0 w-1/5 h-full bg-cover slide-in-image-top-bottom"
            style={{
              backgroundImage: "url('/assets/b-2-shape-5.jpg')",
              zIndex: 2,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </>
      )}

      {/* Text and Button Elements */}
      <div className="relative z-10 text-center">
        <h5 className="text-2xl font-teko tracking-wide sm:text-2xl lg:text-3xl xl:text-5xl text-black font-semibold mb-8 fade-in">
          Welcome to Zenly Apparels
        </h5>
      </div>
      <h1 className="text-4xl font-teko tracking-wide sm:text-4xl lg:text-8xl xl:text-8xl font-bold mb-4 text-black z-10 fade-in">
        A world of Quality and
      </h1>
      <h1 className="text-4xl font-teko tracking-wide sm:text-4xl lg:text-8xl xl:text-8xl font-bold mb-6 text-black z-10 fade-in">
        Endless Designs
      </h1>
      
      {/* Discover More Button with Link */}
      <div className="mt-7 z-10">
        <Link href="/product">
          <button className="bg-[#FEAB17] hover:bg-[#e59e14] font-teko tracking-wide transition duration-300 ease-in-out px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-medium shadow-md transform button-scale">
            Discover More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Section1;


// full working typescript code
// "use client";
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import gsap from 'gsap';

// const Section1: React.FC = () => {
//   const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

//   useEffect(() => {
//     // Function to handle screen size check
//     const handleResize = () => {
//       const currentIsLargeScreen = window.innerWidth > 1024;
//       setIsLargeScreen(currentIsLargeScreen);
      
//       // Remove animation classes if it's not a large screen
//       if (!currentIsLargeScreen) {
//         gsap.set(".slide-in-image, .slide-in-image-right, .slide-in-image-top-bottom", { display: "none" });
//       } else {
//         gsap.set(".slide-in-image, .slide-in-image-right, .slide-in-image-top-bottom", { display: "block" });
//       }
//     };

//     // Initial check and event listener
//     handleResize();
//     window.addEventListener('resize', handleResize);

//     // GSAP animations setup
//     const setupAnimations = () => {
//       // Fade-in and scale effects
//       gsap.fromTo(
//         ".fade-in",
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 1.5, stagger: 0.3, ease: "power2.out" }
//       );

//       gsap.fromTo(
//         ".button-scale",
//         { scale: 0.8 },
//         { scale: 1, duration: 0.8, ease: "elastic.out(1, 0.3)", delay: 1.5 }
//       );

//       // Background zoom effect
//       gsap.fromTo(
//         ".background-zoom",
//         { scale: 1 },
//         { scale: 1.05, duration: 5, ease: "power2.inOut", repeat: -1, yoyo: true }
//       );

//       // Text animation timeline
//       const textAnimationTimeline = gsap.timeline({ repeat: -1, repeatDelay: 2 });
//       textAnimationTimeline
//         .fromTo(
//           ".fade-in-text",
//           { opacity: 0, y: 20 },
//           { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
//         )
//         .to(".fade-in-text", { opacity: 0, duration: 1, ease: "power2.in" });

//       // Only setup sliding animations for large screens
//       if (window.innerWidth > 1024) {
//         // Left-to-right sliding
//         const slideInTimelineLeft = gsap.timeline({ repeat: -1, repeatDelay: 2 });
//         slideInTimelineLeft
//           .fromTo(
//             ".slide-in-image",
//             { opacity: 0, x: "-100%" },
//             { opacity: 1, x: "0%", duration: 2, ease: "power2.out" }
//           )
//           .to(".slide-in-image", { opacity: 0, x: "-100%", duration: 1, ease: "power2.in" });

//         // Right-to-left sliding
//         const slideInTimelineRight = gsap.timeline({ repeat: -1, repeatDelay: 2 });
//         slideInTimelineRight
//           .fromTo(
//             ".slide-in-image-right",
//             { opacity: 0, x: "100%" },
//             { opacity: 1, x: "0%", duration: 2, ease: "power2.out" }
//           )
//           .to(".slide-in-image-right", { opacity: 0, x: "100%", duration: 1, ease: "power2.in" });

//         // Top-to-bottom sliding
//         const slideInTimelineTopToBottom = gsap.timeline({ repeat: -1, repeatDelay: 2 });
//         slideInTimelineTopToBottom
//           .fromTo(
//             ".slide-in-image-top-bottom",
//             { opacity: 0, y: "-100%" },
//             { opacity: 1, y: "0%", duration: 2, ease: "power2.out" }
//           )
//           .to(".slide-in-image-top-bottom", { opacity: 0, y: "-100%", duration: 1, ease: "power2.in" });
//       }
//     };

//     setupAnimations();

//     // Cleanup listener
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div className="relative h-[90vh] w-full flex flex-col items-center justify-center px-8 sm:px-4 lg:px-20 overflow-hidden">
//       {/* Background Image Layer with Zoom Effect */}
//       <div
//         className="absolute inset-0 bg-cover bg-center background-zoom bg-white opacity-50"
//         style={{
//           backgroundImage: "url('/assets/background.jpg')",
//           zIndex: 1,
//         }}
//       />

//       {/* Only render sliding images if it's a large screen */}
//       {isLargeScreen && (
//         <>
//           {/* Sliding Image from Left to Right */}
//           <div
//             className="absolute inset-y-0 left-0 w-full sm:w-1/5 md:w-1/4 h-full bg-cover bg-left slide-in-image"
//             style={{
//               backgroundImage: "url('/assets/shape-1.jpg')",
//               zIndex: 2,
//               height: '80%',
//             }}
//           />

//           {/* Sliding Image from Right to Left */}
//           <div
//             className="absolute inset-y-0 right-0 w-1/4 sm:w-1/5 md:w-1/4 h-full bg-cover bg-right slide-in-image-right"
//             style={{
//               backgroundImage: "url('/assets/b-2-shape-1.jpg')",
//               zIndex: 2,
//               transform: "rotate(180deg)",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           />

//           {/* Sliding Image from Top to Bottom */}
//           <div
//             className="absolute inset-y-0 left-0 w-1/5 h-full bg-cover slide-in-image-top-bottom"
//             style={{
//               backgroundImage: "url('/assets/b-2-shape-5.jpg')",
//               zIndex: 2,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           />
//         </>
//       )}

//       {/* Text and Button Elements */}
//       <div className="relative z-10 text-center">
//         <h5 className="text-2xl font-teko tracking-wide sm:text-2xl lg:text-3xl xl:text-5xl text-black font-semibold mb-8 fade-in">
//           Welcome to Zenly Apparels
//         </h5>
//       </div>
//       <h1 className="text-5xl font-teko tracking-wide sm:text-4xl lg:text-8xl xl:text-8xl font-bold mb-4 text-black z-10 fade-in">
//         A world of Quality and
//       </h1>
//       <h1 className="text-5xl font-teko tracking-wide sm:text-4xl lg:text-8xl xl:text-8xl font-bold mb-6 text-black z-10 fade-in">
//         Endless Designs
//       </h1>

//       {/* Discover More Button with Link */}
//       <div className="mt-7 z-10">
//         <Link href="/product">
//           <button className="bg-[#FEAB17] hover:bg-[#e59e14] font-teko tracking-wide transition duration-300 ease-in-out px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-medium shadow-md transform button-scale">
//             Discover More
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Section1;




// belwo code is with the word animation also
// "use client";
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import gsap from 'gsap';

// const Section1 = () => {
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     // Set up the media query to detect screen size
//     const mediaQuery = window.matchMedia("(max-width: 640px)");
//     const handleMediaQueryChange = (event) => {
//       setIsSmallScreen(event.matches);
//     };

//     // Initial check
//     handleMediaQueryChange(mediaQuery);
//     mediaQuery.addEventListener('change', handleMediaQueryChange);

//     // GSAP animations for fade-in and slide-up effects
//     gsap.fromTo(
//       ".fade-in",
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 1.5, stagger: 0.3, ease: "power2.out" }
//     );

//     gsap.fromTo(
//       ".button-scale",
//       { scale: 0.8 },
//       { scale: 1, duration: 0.8, ease: "elastic.out(1, 0.3)", delay: 1.5 }
//     );

//     // Subtle background zoom effect
//     gsap.fromTo(
//       ".background-zoom",
//       { scale: 1 },
//       { scale: 1.05, duration: 5, ease: "power2.inOut", repeat: -1, yoyo: true }
//     );

//     // GSAP timeline for text animation with loop
//     const textAnimationTimeline = gsap.timeline({ repeat: -1, repeatDelay: 2 }); textAnimationTimeline .fromTo( ".fade-in-text", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" } ) .to(".fade-in-text", { opacity: 0, duration: 1, ease: "power2.in" }) .fromTo( ".fade-in-header", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" } )
//     .to(".fade-in-header", { opacity: 0, duration: 1, ease: "power2.in"});

//     // If it's a small screen, skip the sliding images
//     if (!isSmallScreen) {
//       // GSAP timeline for left-to-right sliding image
//       const slideInTimelineLeft = gsap.timeline({ repeat: -1, repeatDelay: 2 });
//       slideInTimelineLeft.fromTo(
//         ".slide-in-image",
//         { opacity: 0, x: "-100%" },
//         { opacity: 1, x: "0%", duration: 2, ease: "power2.out" }
//       ).to(".slide-in-image", { opacity: 0, duration: 1, ease: "power2.in" });

//       // Right-to-left sliding animation for larger screens
//       const slideInTimelineRight = gsap.timeline({ repeat: -1, repeatDelay: 2 });
//       slideInTimelineRight.fromTo(
//         ".slide-in-image-right",
//         { opacity: 0, x: "100%" },
//         { opacity: 1, x: "0%", duration: 2, ease: "power2.out" }
//       ).to(".slide-in-image-right", { opacity: 0, duration: 1, ease: "power2.in" });

//       // GSAP timeline for top-to-bottom sliding image
//       const slideInTimelineTopToBottom = gsap.timeline({ repeat: -1, repeatDelay: 2 });
//       slideInTimelineTopToBottom.fromTo(
//         ".slide-in-image-top-bottom",
//         { opacity: 0, y: "-100%" },
//         { opacity: 1, y: "0%", duration: 2, ease: "power2.out" }
//       ).to(".slide-in-image-top-bottom", { opacity: 0, duration: 1, ease: "power2.in" });
//     }

//     // Cleanup listener
//     return () => {
//       mediaQuery.removeEventListener('change', handleMediaQueryChange);
//     };
//   }, [isSmallScreen]);

//   return (
//     <div className="relative h-[90vh] w-full flex flex-col items-center justify-center px-8 sm:px-4 lg:px-20 overflow-hidden">
//       {/* Background Image with zoom effect */}
//       <div
//         className="absolute inset-0 bg-cover bg-center background-zoom"
//         style={{
//           backgroundImage: "url('https://imgs.search.brave.com/zXDZ_-f6edh4YQrgm49PlT9MpN6Li7h-Bxcd6IZSU_U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjQyMDI1/MjY1NTktZTIxZTlj/MGZiNDZhP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjAuMyZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1Y/eDhabUZ6YUdsdmJu/eGxibnd3Zkh3d2ZI/eDhNQT09')", // Main background image
//           zIndex: 1,
//         }}
//       ></div>

//       {/* Only render sliding images if it's not a small screen */}
//       {!isSmallScreen && (
//         <>
//           {/* Sliding Image from Left to Right */}
//           <div
//             className="absolute inset-y-0 left-0 w-full sm:w-1/5 md:w-1/4 h-full bg-cover bg-left slide-in-image"
//             style={{
//               backgroundImage: "url('/assets/shape-1.jpg')", // First sliding image
//               zIndex: 2,
//               height: '80%', // Adjust height for mobile
//             }}
//           ></div>

//           {/* Sliding Image from Right to Left */}
//           <div
//             className="absolute inset-y-0 right-0 w-1/4 sm:w-1/5 md:w-1/4 h-full bg-cover bg-right slide-in-image-right"
//             style={{
//               backgroundImage: "url('/assets/b-2-shape-1.jpg')", // Second sliding image
//               zIndex: 2,
//               transform: "rotate(180deg)", // Fixed rotation
//               border: "none", // Ensure no border
//               outline: "none", // Ensure no outline
//               backgroundSize: "cover", // Ensure the image covers the div
//               backgroundPosition: "center", // Center the image to avoid edges
//             }}
//           ></div>

//           {/* Sliding Image from Top to Bottom */}
//           <div
//             className="absolute inset-y-0 left-0 w-1/5 h-full bg-cover slide-in-image-top-bottom"
//             style={{
//               backgroundImage: "url('/assets/b-2-shape-5.jpg')", // Image sliding from top to bottom
//               zIndex: 2,
//               backgroundSize: "cover", // Ensure the image covers the div
//               backgroundPosition: "center", // Center the image to avoid edges
//             }}
//           ></div>
//         </>
//       )}

//       {/* Foreground Content */}
//       <div className="relative z-10 text-center">
//         <h5 className="text-base font-teko tracking-wide sm:text-2xl lg:text-3xl xl:text-5xl text-black font-semibold mb-4 fade-in">
//           Welcome to Zenly Apparels
//         </h5>
//         <h1 className="text-2xl font-teko tracking-wide sm:text-5xl lg:text-8xl xl:text-8xl font-bold mb-4 text-black z-10 fade-in fade-in-text">
//           A world of Quality and
//         </h1>
//         <h1 className="text-2xl font-teko tracking-wide sm:text-5xl lg:text-8xl xl:text-8xl font-bold mb-6 text-black z-10 fade-in fade-in-text">
//           Endless Designs
//         </h1>
//       </div>

//       {/* Discover More Button with Link */}
//       <div className="mt-7 z-10">
//         <Link href="/product">
//           <button className="bg-[#FEAB17] hover:bg-[#e59e14] font-teko tracking-wide transition duration-300 ease-in-out px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-medium shadow-md transform button-scale">
//             Discover More
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Section1;



