import * as React from "react";
import {
  divOuter,
  heading,
  pMember,
  imgMember,
  divInner
} from "./teamMember.module.css";

const TeamMember = ({member}) => {
  return (
    <div className={divOuter}>
      <div className={divInner}>
        <img className={imgMember} src={member.image} alt={member.title}/>
        <h3 className={heading}>{member.title}</h3>
      </div>
        <p className={pMember}>{member.name}</p>
    </div>
  );
}

export default TeamMember;
