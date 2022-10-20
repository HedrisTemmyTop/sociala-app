import React from "react";
import classes from "./ResponseMessage.module.css";
const response = (props) => {
  return <div className={classes.Response}>{props.message}</div>;
};

export default response;
