import { useState, useEffect } from "react";
import { userDetails } from "../../store/reducer/logger";
import { connect } from "react-redux";
const useToken = (props) => {
  const [data, setData] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token");
    props.GET_DATA(token);
    console.log(props);
    setData(props.userDetails);
  }, []);
  return data;
};
const mapStateToProps = (state, ownProps) => {
  return {
    user_details: state,
    ownProps,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    GET_DATA: (token) => dispatch(userDetails(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(useToken);
