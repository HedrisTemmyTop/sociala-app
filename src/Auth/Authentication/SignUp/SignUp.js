import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, db } from "../../AuthConfig";
import classes from "./SignUpForm.module.css";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ref } from "../../AuthConfig";
import { storage } from "../../AuthConfig";
import { uploadBytes } from "../../AuthConfig";
// import { setDoc } from "firebase/firestore";
//////////////////////////////
const user6 =
  "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg";
////////////////
const setProfileImage = async (img, token) => {
  const storageRef = ref(storage, `${token}/${img}`);
  await uploadBytes(storageRef, img)
    .then((image) => {
      // setLoading(false);
      console.log(image, `profile image is ${image} `);
    })
    .catch((err) => {
      // setLoading(false);
      // setResponse(err.message);
      console.log(err);
    });
};
//////////
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("123456");
  const [confirmPassword, setConfirmPassword] = useState("123456");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");

  const state = {
    username: username,
    password: password,
    email: email,
    user_image: user6,
    lastname: lastname,
    confirm_password: confirmPassword,
    contact_number: contactNumber,
  };
  const navigate = useNavigate();

  const signUpHandler = (e) => {
    e.preventDefault();
    if (state.password !== state.confirm_password) {
      alert("Sorry confirm password and password must be the same");
      return false;
    }
    if (state.password.length < 6) {
      console.log("6 digits");
      return false;
    }

    console.log(state, "You successfully registered");
    const email = state.email;
    const password = state.password;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const data = {
          ...state,
          userId: userCredential.user.uid,
        };

        const docRef = doc(db, "users", userCredential.user.uid);

        setDoc(docRef, data)
          .then(() => {
            console.log("Document has been added successfully");
          })
          .catch((error) => {
            console.log(error);
          });

        setProfileImage(user6, userCredential.user.uid);

        alert(
          `Dear ${state.username} your account created succesfully kindly login`
        );
        document
          .querySelectorAll("input")
          .forEach((input) => (input.value = ""));
        navigate("/Login");
      })
      .catch((error) => {
        console.log(error);
        alert("Sorry" + error.message);
        // ..
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
  const setUsernameHandler = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const setPasswordHandler = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const setConfirmPasswordHandler = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
  };
  const setContactNumberHandler = (e) => {
    const contactNumber = e.target.value;
    setContactNumber(contactNumber);
  };

  const setEmailHandler = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const setLastnameHandler = (e) => {
    const lastname = e.target.value;
    setLastname(lastname);
  };

  return (
    <div className={classes.SignUp}>
      <form
        onSubmit={(e) => signUpHandler(e)}
        className={classes.FormContainer}
      >
        <h2 onClick={signOutHandler}>Sign Up</h2>
        <div className={classes.Form}>
          <div className={classes.Input}>
            <label>Firstname</label>
            <input
              type="text"
              value={username}
              required
              onInput={(e) => setUsernameHandler(e)}
            />
          </div>
          <div className={classes.Input}>
            <label>Lastname</label>
            <input
              type="text"
              value={lastname}
              required
              onInput={(e) => setLastnameHandler(e)}
            />
          </div>
          <div className={classes.Input}>
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              required
              onInput={(e) => setEmailHandler(e)}
            />
          </div>
          <div className={classes.Input}>
            <label>Phone number</label>
            <input
              type="number"
              value={contactNumber}
              required
              placeholder="+234 816 112 6466"
              onInput={(e) => setContactNumberHandler(e)}
            />
          </div>
          <div className={classes.Input}>
            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onInput={(e) => setPasswordHandler(e)}
            />
          </div>

          <div className={classes.Input}>
            <label>Confrim Password</label>
            <input
              type="password"
              value={confirmPassword}
              required
              onInput={(e) => setConfirmPasswordHandler(e)}
            />
          </div>
        </div>
        <div className={classes.SignUp__Bottom}>
          <button type="submit" className={classes.Button}>
            Register
          </button>
          <span>Already have an account ?</span>
          <button className={classes.Button} type="normal">
            <Link to="/Login">Login</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
