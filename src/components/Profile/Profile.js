import React, { useState } from "react";
import classes from "./Profile.module.css";
import profileImage from "../../assets/user1.jpg";
import About from "./About/About";
import Posts from "./Posts/Posts";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "../../container/loader/loader";
import { storage, ref, uploadBytes } from "../../Auth/AuthConfig";
import Response from "../../container/message/message";
import Backdrop from "../../container/Backdrop/Backdrop";
import { db } from "../../Auth/AuthConfig";
import { listAll, getDownloadURL } from "firebase/storage";
import { doc } from "firebase/firestore";
import { updateDoc } from "firebase/firestore";
import { async } from "@firebase/util";
///////////////////
const Profile = (props) => {
  console.log(props);
  const parameter = useParams();
  const [uploadImage, setUploadImage] = useState(null);
  const [id, setId] = useState(parameter.id);
  const [state, setState] = useState(true);
  const [image, setImage] = useState(profileImage);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState();
  const [view, setView] = useState();
  const [modal, setModal] = useState(false);

  //////////////////////////////////
  const closeDPHandler = () => {
    setView(false);
  };
  const showProfileImage = (e) => {
    setView(true);
  };
  const showPostsHandler = () => {
    setState(false);
  };
  const showAboutHandler = () => {
    setState(true);
  };

  const uploadImageHandler = (e) => {
    const imageURL = new FileReader();
    imageURL.addEventListener("load", function (e) {
      const src = imageURL.result;
      setImage(src);
    });
    imageURL.onload = (e) => {};
    imageURL.readAsDataURL(e.target.files[0]);
  };
  const sendProfileImageHandler = async (e) => {
    setLoading(true);
    const [img] = e.target.files;
    console.log(img);
    const storageRef = ref(storage, `${props.token}/${img.name}`);

    await uploadBytes(storageRef, img)
      .then((image) => {
        setLoading(false);
        console.log(`profile image is ${image} `);
      })
      .catch((err) => {
        setLoading(false);
        setResponse(err.message);
        console.log(err);
      });

    const imageListRef = ref(storage, `${props.token}/`);

    listAll(imageListRef).then((response) => {
      response.items.forEach((image, i) => {
        getDownloadURL(image)
          .then((url) => {
            const docRef = doc(db, "users", props.token);
            console.log(url);
            updateDoc(docRef, { user_image: url })
              .then((docRef) => {
                console.log(
                  docRef,
                  "A New Document Field has been added to an existing document"
                );
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((err) => console.log(err));
      });
    });
  };

  /////////////////
  let ModalBox = null;
  const showModalHandler = () => {
    setModal(true);
  };
  if (modal)
    ModalBox = (
      <div className={classes.BottomModal}>
        {" "}
        <div onClick={showProfileImage}>View DP</div>
        <div className={classes.Parent}>
          <form className={classes.File}>
            <input
              type="file"
              className={classes.Filed}
              id="uploadImg"
              accept="image/*"
              onChange={(e) => {
                sendProfileImageHandler(e);
                uploadImageHandler(e);
              }}
            />
          </form>

          <div className={classes.FirstChild}>Change DP</div>
        </div>
      </div>
    );
  if (!modal) ModalBox = null;
  const style = {
    borderBottom: "2.5px solid #0055ff",
    color: "#0055ff",
  };
  return (
    <React.Fragment>
      {view ? (
        <Backdrop show={view}>
          <div className={classes.IconCloseDP} onClick={closeDPHandler}>
            &times;
          </div>
          <img src={image} alt="" className={classes.DP} />
        </Backdrop>
      ) : null}
      <div className={classes.Profile}>
        <div className={classes.Display}>
          <div className={classes.Cover}>
            <div className={classes.Profile__Photo}>
              {props.token === id ? (
                <div
                  className={classes.Profile__Image}
                  onClick={showModalHandler}
                >
                  <img src={image} alt="" className={classes.Profile__Image} />
                  {ModalBox}
                </div>
              ) : (
                <div className={classes.Profile__Image}>
                  <img
                    src={image}
                    className={classes.Profile__Image}
                    onClick={showProfileImage}
                  />
                </div>
              )}
            </div>
          </div>

          <div className={classes.Profile__Links}>
            <button
              onClick={showAboutHandler}
              style={state ? style : null}
              className={classes.button}
            >
              <div> About</div>
            </button>
            <button
              style={state ? null : style}
              onClick={showPostsHandler}
              className={[classes.button, classes.non__active].join(" ")}
            >
              <div>Posts</div>
            </button>
          </div>
        </div>
        {state ? <About paramsId={id} userId={props.token} /> : <Posts />}
        {loading ? <Loader /> : ""}
      </div>
      {response ? <Response message={response} /> : null}
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps)(Profile);
