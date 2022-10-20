import React, { useState } from "react";
import classes from "./AboutDetails.module.css";
import Backdrop from "../../../../container/Backdrop/Backdrop";
import Modal from "./Modal/Modal";
const AboutDetails = (props) => {
  console.log(props);
  const [show, setShow] = useState(false);
  const showEditDetailsModalHandler = () => {
    setShow(true);
  };
  const closeBackdropHandler = () => {
    setShow(false);
  };
  let editing = null;
  if (props.paramsId === props.userId) {
    editing = (
      <button className={classes.Edit} onClick={showEditDetailsModalHandler}>
        <div>Edit Details</div>
      </button>
    );
  }
  return (
    <React.Fragment>
      <Backdrop show={show} clicked={closeBackdropHandler}>
        <Modal clicked={closeBackdropHandler} />
      </Backdrop>
      <div className={classes.AboutDetails}>
        <ul className={classes.About__List}>
          <li className={classes.About__Item}>
            <ion-icon name="school"></ion-icon>{" "}
            <div className={classes.About__ItemElement}>
              Studies at Federal University of Technology akure
            </div>
          </li>
          <li className={classes.About__Item}>
            <ion-icon name="pin"></ion-icon>{" "}
            <div className={classes.About__ItemElement}>Lives in ikire</div>
          </li>
          <li className={classes.About__Item}>
            <ion-icon name="home"></ion-icon>{" "}
            <div className={classes.About__ItemElement}>From ikire</div>
          </li>
          <li className={classes.About__Item}>
            <ion-icon name="logo-instagram"></ion-icon>
            <a
              href="https://www.twitter.com/HedrisTemmyTop"
              className={classes.About__ItemElement}
            >
              hedris_temitope
            </a>
          </li>
          <li className={classes.About__Item}>
            <ion-icon name="person-outline"></ion-icon>
            <a
              href="https://www.twitter.com/HedrisTemmyTop"
              className={classes.About__ItemElement}
            >
              hedris_temitope
            </a>
          </li>
        </ul>
        {editing}
      </div>
    </React.Fragment>
  );
};
export default AboutDetails;
