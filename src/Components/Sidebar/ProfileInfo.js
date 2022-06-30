import React from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import Flex from '../Styles/Flex';

import { getAuth } from 'firebase/auth';
import { logout } from '../../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProfileInfo = (props) => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.user);
	const signOut = function () {
		dispatch(logout());
		const auth = getAuth();
	};
	return (
		<StyledProfileInfo>
			<Flex>
				<StyledAvatar src={user.photoURL} />

				<UserInfo>
					<p>{props.username}</p>
					<span>{props.name}</span>
				</UserInfo>
			</Flex>

			<SignoutButton onClick={signOut}>Sign out</SignoutButton>
		</StyledProfileInfo>
	);
};

export default ProfileInfo;
const StyledProfileInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
`;
const StyledAvatar = styled(Avatar)`
	&&& {
		width: 66px;
		height: 66px;
		object-fit: contain;
		margin-right: 15px;
	}
`;

const UserInfo = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	p {
		font-weight: 600;
		color: ${({ theme }) => theme.colors.text};
		font-size: 14px;
	}
	span {
		color: gray;
		font-size: 14px;
	}
`;
const SignoutButton = styled.button`
	color: #0797f6;
	border: none;
	cursor: pointer;
	outline: none;
	background: none;
	margin-top: -7px;
`;
