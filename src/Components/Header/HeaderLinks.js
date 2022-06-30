import Avatar from '@mui/material/Avatar';
import React from 'react';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import styled from 'styled-components';

const HeaderLinks = () => {
	return (
		<StyledLinks>
			<StyledIcon>
				<HomeOutlinedIcon />
			</StyledIcon>
			<StyledIcon>
				<MailOutlineIcon />
			</StyledIcon>
			<StyledIcon>
				<ExploreOutlinedIcon />
			</StyledIcon>
			<StyledIcon>
				<FavoriteBorderOutlinedIcon />
			</StyledIcon>
			<StyledIcon>
				<Avatar />
			</StyledIcon>
		</StyledLinks>
	);
};
const StyledLinks = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
	height: 22px;
`;
const StyledIcon = styled.li`
	> * {
		color: ${({ theme }) => theme.colors.text};
		opacity: 0.75;
		width: 28px !important;
		height: 28px !important;
		cursor: pointer;
		object-fit: contain;
	}
`;

export default HeaderLinks;
