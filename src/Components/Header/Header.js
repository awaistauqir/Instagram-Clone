import React from 'react';
import styled from 'styled-components';

import { CgSearch } from 'react-icons/cg';
import HeaderLinks from './HeaderLinks';

function Header() {
	return (
		<StyledHeader>
			<HeaderContainer>
				<img src='./instagramLogo.png' alt='' />
				<InputContainer>
					<StyledSearchIcon>
						<CgSearch />
					</StyledSearchIcon>
					<input type='text' placeholder='Search' />
				</InputContainer>
				<HeaderLinks />
			</HeaderContainer>
		</StyledHeader>
	);
}

export default Header;
const StyledHeader = styled.header`
	border-bottom: 1px solid #d3d5db;
	width: 100%;
	position: sticky;
	top: 0;
	z-index: 1;
	height: 54px;
	padding: 3px 20px;
	transition: height 0.2s ease-in-out;
	background: #ffffff;
`;
const HeaderContainer = styled.div`
	max-width: ${({ theme }) => theme.width.defaultWidth};
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;

	img {
		width: 103px;
		object-fit: contain;
	}
`;
const StyledSearchIcon = styled.span`
	&&& {
		margin-right: 5px;
		margin-top: 4px;
	}
`;
const InputContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid whitesmoke;
	height: 28px;
	min-width: 125px;
	width: 215px;
	background: ${({ theme }) => theme.colors.background};

	border-radius: 5px;
	padding: 15px 25px;

	input {
		border: none;
		outline: none;

		background: ${({ theme }) => theme.colors.background};
		color: ${({ theme }) => theme.colors.text};
		font-size: 14px;
		::placeholder {
			text-align: center;
		}
	}
`;
