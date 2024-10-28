import dynamic from 'next/dynamic';

const StoreSection = dynamic(() => import("./sections/StoreSection1/StoreSection"), { 
  ssr: false 
});

export default function Store(){
    return (
        <StoreSection />
    )
}