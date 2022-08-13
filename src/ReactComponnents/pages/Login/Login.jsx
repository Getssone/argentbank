import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { getToken } from "../../../utils/getApi";

/**
 * Login component
 * @name Login
 * @returns {JSX}
 */

const Login = () => {
  //configuration de l'etat initial
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidFields, setInvalidFields] = useState("");

  const dispatch = useDispatch();

  //configuration des selecteur initial
  // récupère dans le store : getUser.user.status;
  const message = useSelector((state) => state.getUser.user.status);
  // récupère dans le store : token.user.tokenExist;
  const tokenExist = useSelector((state) => state.token.tokenExist);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInvalidFields("");
    if (email === "" || password === "") {
      return setInvalidFields("Please fill fields correctly");
    } else {
      dispatch(getToken(email, password));
    }
  };

  if (message === 200) {
    return <Navigate to="/profile" />;
  }
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className=" fa fa-user-circle"></i>
        <h1>Sign In</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Email</label>
            <input
              type="text"
              id="username"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="input-remember">
            <label htmlFor="remember-me">Remember me</label>
            <input type="checkbox" id="remember-me" />
          </div>
          <div>{invalidFields}</div>
          {tokenExist === false && <div>Email or password invalid</div>}
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default Login;
