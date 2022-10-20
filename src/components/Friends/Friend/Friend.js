import React from "react";
import classes from "../Friends.module.css";
import friendImg1 from "../../../assets/user1.jpg";
import friendImg2 from "../../../assets/user2.jpg";
import friendImg3 from "../../../assets/user3.jpg";
import friendImg4 from "../../../assets/user4.jpg";
import friendImg5 from "../../../assets/user5.jpg";

const friend = () => {
  const state = {
    request: [
      { name: "John Carter", img: friendImg1, mutual: 10 },
      { name: "Frank Edoho", img: friendImg2, mutual: 11 },
      { name: "Micheal Scofield", img: friendImg3, mutual: 22 },
      { name: "Dominic purcell", img: friendImg4, mutual: 15 },
      { name: "Fernando Sucre", img: friendImg5, mutual: 14 },
    ],
  };
  const newState = {
    ...state,
  };
  return (
    <div className={classes.Content}>
      {newState.request.splice(0, 3).map((user, index) => {
        return (
          <div className={classes.Box} key={index}>
            <div className={classes.Request}>
              <img src={user.img} className={classes.Img} alt="" />
              <div className={classes.Right}>
                <div className={classes.Username}>{user.name}</div>
                <div className={classes.Cap}>{user.mutual} mutual friends</div>
              </div>
            </div>
            <div className={classes.Buttons}>
              <button className={[classes.Button, classes.Confirm].join(" ")}>
                Confirm
              </button>
              <button className={[classes.Button, classes.Del].join(" ")}>
                {" "}
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default friend;
