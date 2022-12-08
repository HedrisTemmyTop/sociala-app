import React, { useEffect, useState } from "react";
import classes from "../Posts.module.css";
import user1 from "../../../../assets/user1.jpg";
import { calcDate } from "../../../../container/date/date";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../Auth/AuthConfig";
////////////////////

///////////////////
const getPostImage = async (userId) => {
  try {
    const docRef = doc(db, "users", userId);
    const docScap = await getDoc(docRef);
    console.log(docScap.data().user_image);
    return docScap.data().user_image;
  } catch (err) {}
};
const getLit = (userId) => {
  let a;
  getPostImage(userId).then((res) => {
    a = res;
  });
  return a;
};
console.log(getPostImage("TRio3ZEvcpRPEoidhssyw3oj0Qd2").then((r) => r));
const Post = (props) => {
  console.log(props);
  let content = null;
  if (props.loading)
    content = (
      <div className={classes.Spinner}>
        <div className={classes.loader}></div>
      </div>
    );
  else {
    const date = new Date();
    content = props.posts.map((post, i) => {
      const displayDate = calcDate(+date, +post.date.stringValue);
      if (post.userId.stringValue === props.token) {
        console.log(post, i);
      }
      return (
        <div className={classes.Box} key={i}>
          <div className={classes.Sender}>
            <img
              src={getLit(post.userId.stringValue)}
              alt=""
              className={classes.Img}
            />
            <div className={classes.Right}>
              <h4>{post.name.stringValue}</h4>
              <div className={classes.Time}>{displayDate}</div>
            </div>
          </div>
          <p className={classes.Content}>{post.body.stringValue}</p>
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
              <span>Share</span>
            </div>
          </div>
        </div>
      );
    });
  }
  return content;
};

export default Post;
