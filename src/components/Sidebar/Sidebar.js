import React from "react";
import classes from "./Sidebar.module.css";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
const sidebar = (props) => {
  const token = localStorage.getItem("token");
  return (
    <div className={classes.Sidebar}>
      <nav>
        <ul>
          <li className={classes.li}>
            <NavLink to="/">
              <ion-icon name="tv-outline"></ion-icon>
              <div>Feeds</div>{" "}
            </NavLink>
          </li>

          <li className={classes.li}>
            <NavLink to={"/profile/" + token}>
              <ion-icon name="person-outline"></ion-icon> <div>Profile</div>{" "}
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink href="/notifications">
              <ion-icon name="notifications-outline"></ion-icon>
              <div>Notifications</div>
            </NavLink>
          </li>

          <li className={classes.li}>
            <NavLink to="/messages">
              <ion-icon name="chatbox-outline"></ion-icon>
              <div>Messages</div>
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink to="/">
              <ion-icon name="settings-outline"></ion-icon>
              <div>Settings</div>
            </NavLink>
          </li>
          <li className={classes.Logout}>
            <NavLink to="/log-out">
              <ion-icon name="log-out-outline"></ion-icon>
              <div>Logout</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps)(sidebar);
