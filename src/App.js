import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/Signin-Signup/SignIn/SignIn";
import Navbar from "./components/header/navbar";
import Homepage from "./pages/Home/Homepage";
import Signup from "./pages/Signin-Signup/Signup/Signup";
import Footer from "./components/footer/footer";
import LandingPage from "./LandingPage/LandingPage";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/firebase/firebase.utils";
import { authActions } from "./store/authSlice/authSlice";

function App() {
  const user = useSelector((state) => state.auth.user);
  const authChecked = useSelector((state) => state.auth.authChecked);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(authActions.logIn(user));
        dispatch(authActions.checkAuthentication(true));
      } else {
        dispatch(authActions.logOut());
        dispatch(authActions.checkAuthentication(true));
      }
      unsub();
    });
  }, []);

  if (!authChecked) {
    return null;
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          to
          element={user?.uid ? <Homepage /> : <LandingPage />}
        />
        <Route path="/signin" to element={<SignIn />} />
        <Route path="/signup" to element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
