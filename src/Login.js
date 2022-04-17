import React from "react";
import "./Login.css";
import logo from './asserts/logo.png';
import { auth, provider } from "./firebase";
import { Button } from "@material-ui/core";
const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => {
      alert(err.message);
    });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src={logo} style={{width:"30vw"}}
          alt="Uni Chat logo"
        />
        <h1>Uni Chat</h1>
        <Button className="login__button" onClick={signIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Login;
