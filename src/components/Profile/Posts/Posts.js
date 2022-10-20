import React, { useState, useEffect } from "react";
import Postclasses from "./Posts.module.css";
import Post from "../../Feeds/Posts/Post/Post";
import { fetchPosts } from "../../../store/reducer/logger";
import { connect } from "react-redux";
const Posts = (props) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPostsData = async () => {
      try {
        console.log(props);
        const response = await fetchPosts();
        const usersPosts = response.filter(
          (post) => post.userId.stringValue === props.token
        );
        setLoading(false);
        setState(usersPosts);
      } catch (error) {
        console.log(error.message);
        return error.message;
      }
    };
    getPostsData();
  }, []);
  return (
    <div className={Postclasses.Posts}>
      <Post posts={state} loading={loading} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps)(Posts);
