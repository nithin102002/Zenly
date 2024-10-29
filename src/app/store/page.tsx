import dynamic from 'next/dynamic';
import StoreHeading from './sections/StoreSection1/StoreHeading';
const StoreSection = dynamic(() => import("./sections/StoreSection1/StoreSection"), { 
  ssr: false 
});

export default function Store(){
    return (
     <div>
       <StoreHeading/>
       <StoreSection />
     </div>
    )
}