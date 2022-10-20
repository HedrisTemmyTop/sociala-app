import React from "react";
import classes from "./Messages.module.css";
import user1 from "../../assets/user1.jpg";
const messages = () => {
  return (
    <div className={classes.Messages}>
      <h3>Messages</h3>
      <div className={classes.Inbox}>
        <div className={classes.Box}>
          <img src={user1} alt="" className={classes.Sender__Img} />
          <div className={classes.Content}>
            <div className={classes.Name}>John smedwin</div>
            <div className={classes.Text}>
              I was at home yesterday, ............
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default messages;
