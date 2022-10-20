import React, { useEffect, useState } from "react";
import classes from "./Newpost.module.css";
import user from "../../../assets/user1.jpg";
import { db } from "../../../Auth/AuthConfig";
import { getUser } from "../../../store/reducer/logger";
import { collection, addDoc } from "firebase/firestore";
const Newpost = (props) => {
  console.log(props);
  const [userDetails, setUser] = useState(props.user);
  const [userToken, setToken] = useState();
  const [defaultProfileImage, setDefaultProfileImage] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    if (props.userImage) setDefaultProfileImage(props.userImage);
    setDefaultProfileImage(props.user.user_image);

    // getUser(token)
    //   .then((user) => {
    //     setUser(user);
    //     console.log(user);
    //   })
    //   .catch((error) => console.log(error));
  }, []);

  const sendPostHandler = () => {
    const body = document.getElementById("postField").value;
    if (!body) return alert("Sorry you have to input some texts");
    const date = new Date();
    const data = {
      name: `${userDetails.lastname} ${userDetails.username}`,
      body: body,
      date: `${+date}`,
      userId: userToken,
      userImage: `${props.userImage ? props.userImage : defaultProfileImage}`,
    };

    const dbRef = collection(db, "posts");
    addDoc(dbRef, data)
      .then((docRef) => {
        const html = `<div className={classes.Box} key={i}>
        <div className={classes.Sender}>
          <img src={us1} alt="" className={classes.Img} />
          <div className={classes.Right}>
            <h4>${userDetails.lastname} ${userDetails.username}</h4>
            <div className={classes.Time}>now</div>
          </div>
        </div>
        <p className={classes.Content}>
        ${body}
        </p>
        <div className={classes.Reactions}>
          <div className={classes.Reactions__Left}>
            <div className={classes.Likes}>
              <ion-icon name="heart"></ion-icon> <span>2.8k Likes</span>
            </div>
            <div className={classes.Comments}>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <span>22 Comments</span>
            </div>
          </div>
          <div className={classes.Reactions__Right}>
            {/* <i class="icon ion-md-share"></i> */}
            <span>Share</span>
          </div>
        </div>
      </div>`;
        document.getElementById("posts").insertAdjacentHTML("afterbegin", html);
      })
      .catch((error) => {
        console.log(error);
      });
    document.getElementById("postField").value = "";
  };
  return (
    <div className={classes.newpost}>
      <div className={classes.Header}>
        <div className={classes.Create} onClick={sendPostHandler}>
          Create post
        </div>
      </div>

      <form className={classes.Form}>
        <img
          src={props.userImage ? props.userImage : defaultProfileImage}
          alt="user image"
          className={classes.User}
        />
        <textarea
          id="postField"
          placeholder="What's on your mind ?"
          className={classes.TextArea}
        ></textarea>
      </form>
      <div className={classes.Bottom}>
        <div className={classes.Bottom__Content}>
          <ion-icon
            style={{ color: "#e50202" }}
            className={classes.Bottom__Icon}
            name="videocam-outline"
          ></ion-icon>
          <div>Live Video</div>
        </div>
        <div className={classes.Bottom__Content}>
          <ion-icon
            style={{ color: "#10d876" }}
            name="image-outline"
          ></ion-icon>

          <div>Photo/Video</div>
        </div>
        <div className={classes.Bottom__Content}>
          <ion-icon
            style={{ color: "#fea450" }}
            className={classes.Bottom__Icon}
            name="camera-outline"
          ></ion-icon>
          <div>Feeling</div>
        </div>
      </div>
    </div>
  );
};
export default Newpost;
