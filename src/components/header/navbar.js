// import { getAuth } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../../store/authSlice/authSlice";
import "./navbar.css";

const Navbar = () => {
	const dispatch = useDispatch();

	const LoggedIn = useSelector((state) => state.auth.isLoggedIn);

	const signOutHandler = () => {
		// const auth = getAuth();
		dispatch(authActions.logOut());
	};

	return (
		<nav className={`nav`}>
			<Link
				to='/'
				className={`logo`}
				style={{
					textDecoration: "none",
				}}
			>
				dLuxKidtv
			</Link>
			{!LoggedIn ? (
				<Link to='/signin' className={`signin-signup`}>
					SignIn
				</Link>
			) : (
				<Link to='/' className={`signin-signup`} onClick={signOutHandler}>
					SignOut
				</Link>
			)}
		</nav>
	);
};

export default Navbar;
