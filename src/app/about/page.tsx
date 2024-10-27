import AboutClients from "./sections/AboutClients/AboutClients";
import AboutCustomerFD from "./sections/AboutCustomerFeedBack/AboutCustomerFD";
import AboutMissionSection from "./sections/AboutMissionSection/AboutMissionSection";
import AboutOurStory from "./sections/AboutOurStory/AboutOurStory";
import AboutQuotes from "./sections/AboutQuotes/AboutQuotes";
import AboutTeam from "./sections/AboutTeam/AboutTeam";

export default function About(){
    return (
      <>
      <AboutOurStory/>
      <AboutCustomerFD/>
      <AboutQuotes/>
    <AboutMissionSection/>
    <AboutTeam/>
    <AboutClients/>
      </>
    )
   }