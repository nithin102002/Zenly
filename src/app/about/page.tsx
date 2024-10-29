import AboutOurLogo from "./sections/AboutOurLogo/AboutOurLogo";
import AboutOurPassion from "./sections/AboutOurPassion/AboutOurPassion";
import AboutOurStory from "./sections/AboutOurStory/AboutOurStory";
import AboutTeam from "./sections/AboutTeam/AboutTeam";

export default function About() {
  return (
    <>
      <AboutOurStory />
      <AboutOurPassion/>
      <AboutOurLogo/>
      <AboutTeam />
    </>
  );
}
