import HomeContact from "./components/HomeContact/HomeContact";
import HomeSection1 from "./components/HomeSection1/HomeSection1";
import HomeSection2 from "./components/HomeSection2/HomeSection2";
import HomeSection4 from "./components/HomeSection4/homeSection4";
import HomeSection5 from "./components/HomeSection5/homeSection5";
import HomeSection8 from "./components/HomeSection8/HomeSection8";
import HomeSection3 from "./components/HomeSection3/HomeSection3";
import HomeSection7 from "./components/HomeSection7/HomeSection7";
import HomeSection9 from "./components/HomeSection9/HomeSection9";
import HomeSection10 from "./components/HomeSection10/HomeSection10";

export default function Home() {
  return (
    <>
     <HomeSection1/>
     <HomeSection2/>
     <HomeSection3 />
     <HomeSection4/>
     <HomeSection5/>
     <HomeSection7 />
     <HomeSection8/>
    <HomeSection9/>
    <HomeSection10/>
    <HomeContact/>
    </>
  );
}
