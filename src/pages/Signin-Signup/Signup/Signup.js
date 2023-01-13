import React from "react";
import useForm from "../../../components/Form/Form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../SignIn/SignIn.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../components/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/authSlice/authSlice";

const Signup = () => {
	const [values, handleChange] = useForm();
	const Navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, values.email, values.password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				Navigate("/");
				dispatch(authActions.signIn());
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorMessage, errorCode);
			});
	};

	return (
		<main className='main'>
			<form className='form ' onSubmit={handleSubmit}>
				<div>
					<h1 className='signin'>Sign Up</h1>
				</div>
				<div>
					<input
						type='text'
						id='name'
						name='name'
						value={values.name || ""}
						onChange={handleChange}
						placeholder='name'
					/>
					<input
						type='text'
						id='email'
						name='email'
						value={values.email || ""}
						onChange={handleChange}
						placeholder='email  '
					/>
					<input
						type='text'
						id='phone number'
						name='phonenumber'
						value={values.phonenumber || ""}
						onChange={handleChange}
						placeholder='phone number'
					/>

					<input
						type='text'
						id='password'
						name='password'
						value={values.password || ""}
						onChange={handleChange}
						placeholder='password'
					/>
					<input
						type='text'
						id='confirm-password'
						name='confirm-password'
						value={values.password || ""}
						onChange={handleChange}
						placeholder='confirm password'
					/>
				</div>
				<div>
					<button onClick={handleSubmit} className='sign-btn' type='submit'>
						Sign Up
					</button>
					<span className='signup-signin-text'>
						Already have an account?{" "}
						<Link
							to='/signin'
							className='signup'
							style={{
								textDecoration: "none",
							}}
						>
							Sign In
						</Link>
					</span>
				</div>
			</form>
			<div className='grey_div'></div>
		</main>
	);
};

export default Signup;
