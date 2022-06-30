import React, { useEffect } from 'react';
import GloablStyles from './Components/Styles/Global';
import Header from './Components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main';
import Login from './Components/Login/Login';
import { login, logout, selectUser } from './features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '@firebase/auth';
function App() {
	const theme = {
		colors: {
			background: '#fafafa',
			text: '#262626',
			inactive: '#DBDBDB',
		},
		width: {
			defaultWidth: '935px',
		},
	};
	const user = useSelector(selectUser);

	const dispatch = useDispatch();
	useEffect(function () {
		const auth = getAuth();
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						username: userAuth.displayName,
						photoURL: userAuth.photoURL,
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<GloablStyles />
			<>
				<Header />
				<BrowserRouter>
					<Switch>
						<Route path='/' exact>
							{user ? <Main /> : <Login />}
						</Route>
					</Switch>
				</BrowserRouter>
			</>
		</ThemeProvider>
	);
}

export default App;
