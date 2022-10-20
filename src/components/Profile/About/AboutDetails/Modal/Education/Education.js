import { doc } from "firebase/firestore";
import React, { useState } from "react";
import classes from "../Modal.module.css";
import EducationInputs from "./EducationInputs/EducationInputs";
const Education = () => {
  const [show, setShow] = useState();
  const [defaultValue, setValue] = useState("");
  const [button, setButton] = useState(true);

  const submitHandler = () => {
    setButton(true);
    setValue("");
    setShow(false);
  };

  const editSchoolHandler = () => {
    setShow(true);
    setButton(false);
    const current = document.querySelector("#icon");
    console.log(current.nextElementSibling.textContent);
    setValue(current.nextSibling.textContent);
  };
  let content = null;
  if (show) {
    content = (
      <EducationInputs
        value={defaultValue}
        submit={submitHandler}
        Edit={editSchoolHandler}
        Field="Edus"
        icon="icon"
      />
    );
  } else {
    content = null;
  }
  return (
    <div className={classes.Education}>
      <h3 className={classes.Education__Head}>Education</h3>
      <div id="Edus">
        <div className={classes.Edu}>
          <ion-icon
            name="school"
            id="icon"
            onClick={editSchoolHandler}
          ></ion-icon>
          <p>Sutdies at Federal University of Technology Akure</p>
        </div>
      </div>
      <div id="fields">{content}</div>
    </div>
  );
};

export default Education;
