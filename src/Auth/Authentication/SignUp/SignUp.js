import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, db } from "../../AuthConfig";
import classes from "./SignUpForm.module.css";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
// import { setDoc } from "firebase/firestore";
//////////////////////////////

////////////////

//////////
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");

  const state = {
    username: username,
    password: password,
    email: email,
    user_image: `https://scontent.flos5-2.fna.fbcdn.net/v/t1.6435-9/66155887_3073618089322661_4755773452424577024_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEWKrQp66riDt6-1ZtLLdI_KhunnyJpGvsqG6efImka-7Hu7W8Vqdjgl8LkU88NObb5HR3WdqIK9maRB5tM4zlA&_nc_ohc=y5Ar-WyNr0kAX_FvQE5&tn=3PIo6VroMNWmcr0p&_nc_ht=scontent.flos5-2.fna&oh=00_AT_9xvUBVk9WjoHnZLgt9hhY9XEeN_qiRURX3aAYK7z8xQ&oe=63711221`,
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
