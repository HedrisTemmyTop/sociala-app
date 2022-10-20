import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../AuthConfig";

import classes from "../SignUp/SignUpForm.module.css";

/////////////////////
onAuthStateChanged(auth, (user) => {
  if (user) {
    localStorage.clear();
    localStorage.setItem("auth", true);
    localStorage.setItem("token", user.uid);
  } else localStorage.clear();
});

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signUpHandler = (e) => {
    e.preventDefault();

    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setLoading(false);
        console.log(userCredential);
        const user = userCredential.user;
        localStorage.setItem("auth", true);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  let content = null;
  if (loading) {
    content = <div className={classes.loader}> </div>;
  } else {
    content = (
      <div className={classes.SignUp}>
        <form
          onSubmit={(e) => signUpHandler(e)}
          className={classes.FormContainer}
        >
          <h2 onClick={signOutHandler}>Sign Ip</h2>
          <div className={classes.Form}>
            <div className={classes.Input}>
              <label>Email Address</label>
              <input
                type="email"
                required
                value={email}
                onInput={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={classes.Input}>
              <label>Password</label>
              <input
                type="password"
                required
                value={password}
                onInput={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.SignUp__Bottom}>
            <button type="submit" className={classes.Button}>
              Login
            </button>
            <span>No account yet ?</span>
            <button className={classes.Button}>
              <Link to="/Register"> Register</Link>
            </button>
          </div>
        </form>
      </div>
    );
  }

  return content;
};

export default SignIn;
