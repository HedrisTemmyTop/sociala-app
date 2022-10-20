import React from "react";
import classes from "./Friends.module.css";
import Friend from "./Friend/Friend";
const friends = () => {
  return (
    <div className={classes.Friends}>
      <div className={classes.Header}>
        <h4 className={classes.Header__Name}>Friend request</h4>
        <a href="/" className={classes.Header__Link}>
          See all
        </a>
      </div>
      <Friend />
    </div>
  );
};
export default friends;
