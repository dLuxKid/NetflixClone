import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/Signin-Signup/SignIn/SignIn";
import Navbar from "./components/header/navbar";
import Homepage from "./pages/Home/Homepage";
import Signup from "./pages/Signin-Signup/Signup/Signup";
import Footer from "./components/footer/footer";
import LandingPage from "./LandingPage/LandingPage";
import { useSelector } from "react-redux";

function App() {
	const LoggedIn = useSelector((state) => state.auth.isLoggedIn);

	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route
					exact
					path='/'
					to
					element={LoggedIn ? <Homepage /> : <LandingPage />}
				/>
				{/* <Route path="/home" to element={<Homepage />} /> */}
				<Route path='/signin' to element={<SignIn />} />
				<Route path='/signup' to element={<Signup />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
