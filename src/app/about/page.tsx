import AboutMissionSection from "./sections/AboutMissionSection/AboutMissionSection";
import AboutOurStory from "./sections/AboutOurStory/AboutOurStory";
import AboutQuotes from "./sections/AboutQuotes/AboutQuotes";
import AboutTeam from "./sections/AboutTeam/AboutTeam";

export default function About(){
    return (
      <>
      <AboutOurStory/>
      <AboutQuotes/>
    <AboutMissionSection/>
    <AboutTeam/>
      </>
    )
   }