import React from "react";
import classes from "./Header.module.css";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import SocialIcons from "./About/About";
const header = (props) => {
  return (
    <div className={classes.Header}>
      <Logo />
      <Search />
      <SocialIcons user={props.user} userImage={props.userImage} />
    </div>
  );
};

export default header;
