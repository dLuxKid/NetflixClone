// import { getAuth } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../../store/authSlice/authSlice";
import "./navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const signOutHandler = () => {
    dispatch(authActions.logOut());
  };

  return (
    <nav className={`nav`}>
      <Link
        to="/"
        className={`logo`}
        style={{
          textDecoration: "none",
        }}
      >
        dLuxKidtv
      </Link>
      {!user?.uid ? (
        <Link to="/signin" className={`signin-signup`}>
          Sign In
        </Link>
      ) : (
        <Link to="/" className={`signin-signup`} onClick={signOutHandler}>
          Sign Out
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
