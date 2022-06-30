import styled from 'styled-components';
import React from 'react';

const BackDrop = () => {
	return <StyledBackDrop></StyledBackDrop>;
};

export default BackDrop;
const StyledBackDrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 100;
	background: rgba(0, 0, 0, 0.75);
`;
