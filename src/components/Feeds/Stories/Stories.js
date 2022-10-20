import React from "react";
import classes from "./Stories.module.css";
import user from "../../../assets/user-11.png";

const Stories = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "20rem" }}>
      <div className={classes.Stories}>
        <div className={classes.Box}>
          <div className={classes.Icon}>
            <div>+</div>
          </div>
          <div className={classes.Text}>Add story</div>
        </div>
        <div className={classes.PostBox}>
          <img
            src={user}
            alt="background-img"
            className={classes.PostBox__Img}
          />
        </div>
        <div className={classes.PostBox}>
          <img
            src={user}
            alt="background-img"
            className={classes.PostBox__Img}
          />
        </div>
        <div className={classes.PostBox}>
          <img
            src={user}
            alt="background-img"
            className={classes.PostBox__Img}
          />
        </div>
        <div className={classes.PostBox}>
          <img
            src={user}
            alt="background-img"
            className={classes.PostBox__Img}
          />
        </div>
        <div className={classes.PostBox}>
          <img
            src={user}
            alt="background-img"
            className={classes.PostBox__Img}
          />
        </div>
        <div className={classes.PostBox}>
          <img
            src={user}
            alt="background-img"
            className={classes.PostBox__Img}
          />
        </div>
        <div className={classes.PostBox}>
          <img
            src={user}
            alt="background-img"
            className={classes.PostBox__Img}
          />
        </div>
        <div className={classes.PostBox}>
          <img
            src={user}
            alt="background-img"
            className={classes.PostBox__Img}
          />
        </div>
      </div>
      <div>Hello</div>
    </div>
  );
};

export default Stories;
