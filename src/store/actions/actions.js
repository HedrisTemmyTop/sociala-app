export const GET_DATA = (token) => {
  return {
    type: "GET_DATA",
    userDetails: token,
  };
};

export const GET_POSTS = (posts) => {
  return {
    type: "GET_POSTS",
    posts: posts,
  };
};
