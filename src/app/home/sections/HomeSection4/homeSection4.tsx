"use client";

import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function HomeSection4() {
    return (
        <main className="flex flex-col items-center justify-center h-full min-h-[50vh] md:min-h-[60vh] lg:min-h-[75vh] xl:min-h-[85vh] bg-[#f3f3f3] px-2 md:px-4 lg:px-12 py-2 md:py-6 lg:py-10">
            <h1 className="text-lg font-teko  tracking-wide sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-center text-gray-800 mb-3 md:mb-5 lg:mb-8 xl:mb-10">
                EXPERIENCE US LIVE.
            </h1>
            <div className="w-full  sm:max-w-md md:max-w-lg lg:max-w-full xl:max-w-4xl">
                <div className="relative" style={{ paddingTop: '56.25%' }}>
                    <ReactPlayer
                        url="/assets/Zenly.mp4"
                        className="absolute top-0 left-0 w-full h-full"
                        width="100%"
                        height="100%"
                        controls
                        loop
                        playing
                    />
                </div>
            </div>
        </main>
    );
}
