import React, { useState } from "react";
import classes from "./Backdrop.module.css";

///////////////////
const Backdrop = (props) => {
  const [show, setShow] = useState(props.show);

  let content = null;
  if (props.show) {
    content = <div className={classes.Backdrop}>{props.children}</div>;
  } else {
    content = null;
  }
  return content;
};

export default Backdrop;
