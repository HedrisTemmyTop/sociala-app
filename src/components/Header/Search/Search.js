import React from "react";
import classes from "./Search.module.css";
const search = () => {
  return (
    <form className={classes.Search}>
      <input type="text" placeholder="Start typing to search..." />
    </form>
  );
};

export default search;
