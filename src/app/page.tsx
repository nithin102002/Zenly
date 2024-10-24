import Contact from "./components/Contact/Contact";
import Section1 from "./components/Section1/Section1";
import Section10 from "./components/Section10/Section10";
import Section3 from "./components/Section3/Section3";
import Section7 from "./components/Section7/Section7";
import Section9 from "./components/Section9/Section9";

export default function Home() {
  return (
    <>
     <Section1/>
     <Section3 />
     <Section7 />
    <Section9/>
    <Section10/>
    <Contact/>
    </>
  );
}
