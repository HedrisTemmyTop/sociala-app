import React from "react";
import classes from "./About.module.css";
import Bio from "./Bio/Bio";
import Photos from "./Photos/Photos";
import AboutDetails from "./AboutDetails/AboutDetails";
const About = (props) => {
  console.log(props);
  return (
    <div className={classes.About}>
      <h3 className={classes.Heading}>Bio</h3>

      <Bio paramsId={props.paramsId} userId={props.userId} />
      <h3 className={classes.Heading}>About</h3>
      <AboutDetails paramsId={props.paramsId} userId={props.userId} />
      <h3 className={classes.Heading} style={{ marginTop: "2rem" }}>
        Photos
      </h3>
      <Photos />
    </div>
  );
};

export default About;
