import React, { useState } from "react";
import useForm from "../../../components/Form/Form";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/authSlice/authSlice";
import { auth } from "../../../components/firebase/firebase.utils";

const SignIn = () => {
  const [values, handleChange] = useForm();
  const [pending, setPending] = useState(null);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    setPending(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(authActions.logIn(user));
        setPending(null);
        Navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
        setPending(null);
      });
  };

  return (
    <main className="main">
      <form className="form " onSubmit={handleSubmit}>
        <div>
          <h1 className="signin">Sign In</h1>
        </div>
        <div>
          <input
            type="text"
            id="email"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
            placeholder="email or phone number "
          />

          <input
            type="text"
            id="password"
            name="password"
            value={values.password || ""}
            onChange={handleChange}
            placeholder="password"
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          {pending ? (
            <button disabled className="sign-btn">
              Loading...
            </button>
          ) : (
            <button onClick={handleSubmit} className="sign-btn" type="submit">
              Log In
            </button>
          )}
          <span className="signup-signin-text">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="signup"
              style={{
                textDecoration: "none",
              }}
            >
              Create Account
            </Link>
          </span>
        </div>
      </form>
      <div className="grey_div"></div>
    </main>
  );
};

export default SignIn;
