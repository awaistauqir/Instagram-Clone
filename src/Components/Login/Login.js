import Button from '@mui/material/Button';
import React from 'react';
import styled from 'styled-components';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/user/userSlice';

const Login = () => {
	const dispatch = useDispatch();

	const loginHandler = function (e) {
		e.preventDefault();
		const auth = getAuth();
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				console.log(user);
				dispatch(
					login({
						username: user.displayName,
						email: user.email,
						photoURL: user.photoURL,
						userid: user.uid,
					})
				);
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	};
	return (
		<LoginContainer>
			<div>
				<div>
					<img src='./instagramLogo.png' alt='' />
				</div>
				<StyledButton
					variant='contained'
					component='label'
					onClick={loginHandler}>
					Login
				</StyledButton>
			</div>
		</LoginContainer>
	);
};

export default Login;
const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	gap: 25px;

	img {
		flex: 0;
		width: 300px;

		object-fit: contain;
	}
`;
const StyledButton = styled(Button)`
	width: 100%;
`;
