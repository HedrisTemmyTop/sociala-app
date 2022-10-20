import React, { useEffect, useState } from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";
import { fetchPosts } from "../../../store/reducer/logger";
const Posts = (props) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPostsData = async () => {
      try {
        const response = await fetchPosts();
        console.log(response);
        setLoading(false);
        setState(response);
      } catch (error) {
        console.log(error);
      }
    };
    getPostsData();
    console.log("Hello world");
  }, []);
  return (
    <div className={classes.Posts} id="posts">
      <Post posts={state} userImage={props.userImage} loading={loading} />
    </div>
  );
};

export default Posts;
