"use client"; 

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function HomeSection4() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-[#f3f3f3] sm:px-4 md:px-10">
            <h1 className="text-4xl font-bold text-center mb-4">EXPERIENCE US LIVE.</h1>
            <div className="w-full max-w-4xl sm:max-w-md  md:max-w-2xl lg:max-w-4xl xl:max-w-4xl"> 
                <div className="relative" style={{ paddingTop: '56.25%' }}> 
                    <ReactPlayer
                        url="https://v.ftcdn.net/04/15/69/72/700_F_415697290_zBlJFddKioqUgBBlebfKHHd9QQNJadQQ_ST.mp4"
                        className="react-player absolute top-0 left-0 w-full h-full"
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