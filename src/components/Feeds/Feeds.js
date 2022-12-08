import React from "react";
import classes from "./Feeds.module.css";
import Stories from "./Stories/Stories";
import Newpost from "./Newpost/Newpost";
import Posts from "./Posts/Posts";
const feeds = (props) => {
  return (
    <React.Fragment>
      <div className={classes.Feeds}>
        <Stories />
        <Newpost user={props.user} userImage={props.userImage} />
        <Posts userImage={props.userImage} token={props.token} />
      </div>
    </React.Fragment>
  );
};

export default feeds;
