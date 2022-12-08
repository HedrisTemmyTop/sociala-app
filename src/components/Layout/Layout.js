import React, { useEffect, useState } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./Layout.module.css";
import Aux from "../../container/hoc/Auxilliary";
import Profile from "../Profile/Profile";
import Feeds from "../Feeds/Feeds";
import Messages from "../Messages/Messages";
import Friends from "../Friends/Friends";
import { listAll, getDownloadURL } from "firebase/storage";
import { connect } from "react-redux";
import { storage, ref } from "../../Auth/AuthConfig";
import { getUser } from "../../store/reducer/logger";

const Layout = (props) => {
  const navigate = useNavigate();
  const [authentication, setAuth] = useState();
  const [userImage, setUserImage] = useState([]);
  const [userToken, setToken] = useState();

  const [user, setUser] = useState();
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    setAuth(auth);
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    getUser(token)
      .then((user) => {
        setUser(user);
        console.log(user);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const imageListRef = ref(storage, `${props.token}/`);
    listAll(imageListRef)
      .then((response) => {
        response.items.forEach((image, i) => {
          getDownloadURL(image).then((url) => {
            if (url) setUserImage((prev) => [...prev, url]);
            if (!url)
              setUserImage(
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fhu%2Fsearch%2Fimages%3Fk%3Ddefault%2Bprofile%2Bpicture&psig=AOvVaw1Ffpb4MADdWb1pwKYn4eRz&ust=1665972871067000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMCOytTW4_oCFQAAAAAdAAAAABAE"
              );
          });
          console.log(userImage);
        });
      })
      .catch((err) => console.log(err));
  }, []);
  let content = null;
  if (!authentication) {
    navigate("/Register");
  }
  if (authentication && user) {
    content = (
      <Aux>
        <Header userImage={userImage[0]} user={user} />
        <main>
          <Sidebar />
          <div className={classes.Content}>
            <Routes>
              <Route
                path="/"
                element={
                  <React.Fragment>
                    <Feeds
                      userImage={userImage[0]}
                      token={userToken}
                      user={user}
                    />{" "}
                    <Friends />
                  </React.Fragment>
                }
              ></Route>
              <Route
                path="/profile/:id"
                element={<Profile userImage={userImage[0]} />}
              />
            </Routes>

            <Messages />
          </div>
        </main>
      </Aux>
    );
  }
  return content;
};
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Layout);
