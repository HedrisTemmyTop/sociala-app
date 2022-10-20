import React, { useState } from "react";
import classes from "../Modal.module.css";

import EducationInputs from "../Education/EducationInputs/EducationInputs";
const City = () => {
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
    const current = document.querySelector("#icon-location");
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
        icon="icon-city"
        Field="Edus3"
      />
    );
  } else {
    content = null;
  }
  return (
    <div className={classes.Education}>
      <h3 className={classes.Education__Head}>Current City</h3>
      <div id="Edus3">
        <div className={classes.Edu}>
          <ion-icon
            name="school"
            id="icon-city"
            onClick={editSchoolHandler}
          ></ion-icon>{" "}
          <p>Lives at Ikire</p>
        </div>
      </div>
      <div id="fields">{content}</div>
    </div>
  );
};

export default City;
