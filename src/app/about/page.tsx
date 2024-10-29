import AboutOurLogo from "./sections/AboutOurLogo/AboutOurLogo";
import AboutOurPassion from "./sections/AboutOurPassion/AboutOurPassion";
import AboutOurStory from "./sections/AboutOurStory/AboutOurStory";
import AboutTeam from "./sections/AboutTeam/AboutTeam";
import AboutText from "./sections/AboutText/AboutText";

export default function About() {
  return (
    <>
    <AboutText/>
      <AboutOurStory />
      <AboutOurPassion/>
      <AboutOurLogo/>
      <AboutTeam />
    </>
  );
}
