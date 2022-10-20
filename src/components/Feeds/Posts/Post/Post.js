import React, { useEffect, useState } from "react";
import classes from "../Posts.module.css";
import user1 from "../../../../assets/user1.jpg";
// import user2 from "../../../../assets/user2.jpg";
// import user3 from "../../../../assets/user3.jpg";
// import user4 from "../../../../assets/user4.jpg";
// import user5 from "../../../../assets/user5.jpg";
// import user6 from "../../../../assets/user6.jpg";
// import user7 from "../../../../assets/user7.jpg";
// import user8 from "../../../../assets/user8.jpg";
// import user9 from "../../../../assets/user9.jpg";
// import user10 from "../../../../assets/user10.jpg";
import { calcDate } from "../../../../container/date/date";
////////////////////

///////////////////

const Post = (props) => {
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

      return (
        <div className={classes.Box} key={i}>
          <div className={classes.Sender}>
            <img
              src={post.userImage.stringValue}
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
              {/* <i class="icon ion-md-share"></i> */}
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
