"use client";

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function HomeSection4() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-[#f3f3f3] px-4 md:px-8 lg:px-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 md:mb-8">
                EXPERIENCE US LIVE.
            </h1>
            <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                <div className="relative" style={{ paddingTop: '56.25%' }}>
                    <ReactPlayer
                        url="https://v.ftcdn.net/04/15/69/72/700_F_415697290_zBlJFddKioqUgBBlebfKHHd9QQNJadQQ_ST.mp4"
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
