import React from "react";
import classes from "../Modal.module.css";
const Bottom = (props) => {
  return (
    <div className={classes.Bottom}>
      <div className={classes.Button}>
        <div className={classes.LeftButton}>
          <button className={[classes.Update, classes.button].join(" ")}>
            Update Information
          </button>
        </div>
        <div className={classes.RightButton}>
          <button className={[classes.Save, classes.button].join(" ")}>
            Save
          </button>
          <button
            className={[classes.Cancel, classes.button].join(" ")}
            onClick={props.clicked}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default Bottom;
