import React from "react";
import classes from "./Modal.module.css";
import Education from "./Education/Education";
import City from "./City/City";
import Hometown from "./Hometown/Hometown";
import Bottom from "./Bottom/Bottom";
import SocialLinks from "./SocialLinks/SocialLinks";
import EducationInputs from "./Education/EducationInputs/EducationInputs";
const Modal = (props) => {
  const state = ["Education", "Location", "Hometown"];
  const links = ["instagram", "twitter"];
  return (
    <div className={classes.Modal}>
      <div className={classes.Head}>
        <h3 className={classes.Heading}>Edit Details</h3>
        <div className={classes.Close} onClick={props.clicked}>
          <div className={classes.CloseIcon}>&times;</div>
        </div>
      </div>
      <div className={classes.Content}>
        <EducationInputs state={state} links={links} />
      </div>
      <Bottom clicked={props.clicked} />
    </div>
  );
};

export default Modal;
