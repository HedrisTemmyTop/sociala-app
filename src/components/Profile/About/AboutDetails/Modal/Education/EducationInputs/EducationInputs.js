import React, { useState } from "react";
import classes from "./EducationInputs.module.css";
const EducationInputs = (props) => {
  console.log(props);
  const [value, setValue] = useState(props.value);
  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const submitHandler = () => {
    console.log("sumitted");
  };

  return (
    <form className={classes.Form} onSubmit={(e) => submitHandler(e)}>
      {props.state.map((state) => {
        return (
          <div className={classes.Inputs} key={state}>
            <label>{state}</label>
            <input
              className={classes.InputEl}
              value={value}
              placeholder={state}
              onChange={(e) => inputChangeHandler(e)}
              type="text"
            />
          </div>
        );
      })}
      <div className={classes.Education}>
        <h3 className={classes.Education__Head}>Social Media Links</h3>
      </div>
      {props.links.map((link) => {
        return (
          <div className={classes.Inputs} key={link}>
            <label>{link}</label>
            <input
              className={classes.InputEl}
              value={value}
              placeholder={"@" + link}
              onChange={(e) => inputChangeHandler(e)}
              type="text"
            />
          </div>
        );
      })}
    </form>
  );
};
export default EducationInputs;
