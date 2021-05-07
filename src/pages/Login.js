import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { AuthContext } from "../AuthContext";
import { fireAuth } from "../firebase";
import "../styles/Login.css";

const Login = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [fullName, setFullName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  //...
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  //...

  const login = (event) => {
    event.preventDefault();
    register();
  };
  const register = () => {
    fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: fullName,
            photoURL: photo,
          })
          .then(() => {
            setAuth({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: fullName,
              photoURL: photo,
            });
            storData(userAuth.user.uid);
            history.replace(from);
          });
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  //...
  const storData = (token) => {
    sessionStorage.setItem("token",token);
  };
  //...
  return (
    <div className="login_page">
      <div className="login_form_container">
        <div className="login_logo_div">
          <img
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
            alt="logo"
          />
        </div>
        <form>
          {error && <p className="form_error">{error}</p>}
          <input
            type="text"
            placeholder="Full name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Profile photo URL (optional)"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={login}>Sign In</button>
        </form>
        <div className="login_create_new_account">
          <p>Not a member?</p> <button> Resister Now</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
