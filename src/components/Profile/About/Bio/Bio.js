import React from "react";
import classes from "./Bio.module.css";
const Bio = (props) => {
  return (
    <div className={classes.Biography}>
      <div className={classes.Bio}>
        <p>Tech 💰 </p>
      </div>
      {props.paramsId === props.userId ? (
        <button className={classes.Edit}>
          <div>Edit Bio</div>
        </button>
      ) : null}
    </div>
  );
};

export default Bio;
