import * as React from "react";
import imageMember1 from "../images/photo1.png";
import imageMember2 from "../images/photo2.png";
import imageMember3 from "../images/photo3.png";
import imageMember4 from "../images/photo4.png";
import imageMember5 from "../images/photo5.png";
import imageMember6 from "../images/photo6.png";
import TeamMember from "../components/teamMember";
import {
  mainStyle,
  pFooter,
  pHeading,
  divAbout,
  pAbout,
  divHeading,
  divTeamMembers,
  divOuter,
  footerStyle,
  pAboutTitle
} from "./index.module.css";

const teamMembers = [
  {
    name: "Bill Mahoney",
    title: "Product Owner",
    image: imageMember1
  },
  {
    name: "Saba Cabrera",
    title: "Art director",
    image: imageMember2
  },
  {
    name: "Shae Le",
    title: "Tech Lead",
    image: imageMember3
  },
  {
    name: "Skylah Lu",
    title: "UX Designer",
    image: imageMember4
  },
  {
    name: "Griff Richards",
    title: "Developer",
    image: imageMember5
  },
  {
    name: "Stan John",
    title: "Developer",
    image: imageMember6
  },
];

const IndexPage = () => {
  return (
    <div className={divOuter}>
      <main className={mainStyle}>
        <div className={divHeading}>
          <p className={pHeading}>The creative crew</p>
          <div className={divAbout}>
            <p className={pAboutTitle}>Who we are</p>
            <p className={pAbout}>We are team of creatively diverse. driven. innovative individuals working in various
              locations from the
              world.</p>
          </div>
        </div>
        <div className={divTeamMembers}>
          {teamMembers.map(member => (
            <TeamMember member={member}/>
          ))}
        </div>
      </main>
      <footer className={footerStyle}>
        <p className={pFooter}>created by pranav0281999 - devChallenges.io</p>
      </footer>
    </div>
  )
}

export default IndexPage;
