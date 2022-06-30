import Avatar from '@mui/material/Avatar';
import React from 'react';
import styled from 'styled-components';
const SuggestedUser = (props) => {
	return (
		<StyledSuggestedUser>
			<div>
				<StyledAvatar src={props.photoURL} />
				<span>{props.username}</span>
			</div>

			{!props.isFollowing ? (
				<FollowButton>Follow</FollowButton>
			) : (
				<FollowButton style={{ color: '#acacac', cursor: 'default' }}>
					Followed
				</FollowButton>
			)}
		</StyledSuggestedUser>
	);
};

export default SuggestedUser;
const StyledSuggestedUser = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex: 1;
	width: 100%;
	> div {
		display: flex;
		align-items: center;
		justify-content: center;

		> span {
			color: ${({ theme }) => theme.colors.text};
			font-size: 13px;
			margin-top: -3px;
			font-weight: 600;
		}
	}
`;
const StyledAvatar = styled(Avatar)`
	&&& {
		width: 25px;
		height: 25px;
		object-fit: contain;
		margin-right: 14px;
	}
`;
const FollowButton = styled.button`
	border: none;
	outline: none;
	background: none;
	color: rgb(7, 151, 246);
	font-size: 12px;
	cursor: pointer;
`;
