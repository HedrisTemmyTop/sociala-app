import React from "react";
// import userImg from "../../../assets/user2.jpg";
import classes from "./About.module.css";
const socialIcons = (props) => {
  console.log(props);
  return (
    <div className={classes.About}>
      <ion-icon name="notifications-outline"></ion-icon>

      <ion-icon name="chatbox-outline"></ion-icon>
      <ion-icon name="settings-outline"></ion-icon>
      <img src={props.userImage} className={classes.Img} />
    </div>
  );
};

export default socialIcons;
