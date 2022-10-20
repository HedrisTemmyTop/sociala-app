const usersToken = localStorage.getItem("token");
const initialState = {
  token: usersToken,
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
