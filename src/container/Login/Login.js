import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";

import firebase from "firebase/compat/app";
import { auth } from "../../services/Firebase/Firebase";
import { UserContext } from "../../services/Utils/UserContext";
import { StateProvider } from "../../services/Utils/StateProvider";
import reducer, { initialState } from "../../services/Reducers/reducer";

import logo_login from "../../assets/logo_login.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        console.log(user);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (
          errorCode === "auth/wrong-password" ||
          errorCode === "auth/user-not-found"
        ) {
          alert("Wrong password. Please try again.");
        } else {
          console.log(errorCode, errorMessage);
        }
      });
  };

  const register = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        console.log(user);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/email-already-in-use") {
          alert(errorMessage);
        } else {
          console.log(errorCode, errorMessage);
        }
      });
  };

  return (
    <div>
      <div className="login">
        <Link to="/">
          <img className="login__logo" src={logo_login} alt="" />
        </Link>
        <div className="login__container">
          <h1>Sign In</h1>
          <form>
            <h5>E-Mail or mobile phone number</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              onClick={signIn}
              className="login__signInButton"
            >
              Sign In
            </button>
          </form>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <p className="login__nh">► Need Help?</p>
        </div>
        <p className="login__newToAmznText">New to Amazon?</p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
      <div className="login__footer">
        <p>Conditions of Use</p>
        <p>Privacy Notice</p>
        <p>Help</p>
      </div>
      <p className="login__footer__ll">
        © 1996-2023, Amazon.com, Inc. or its affiliates
      </p>
    </div>
  );
}

export default function LoginWithContext() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Login />
    </StateProvider>
  );
}
