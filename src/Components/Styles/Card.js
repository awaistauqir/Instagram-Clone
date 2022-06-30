import React from 'react';
import styled from 'styled-components';

function Card(props) {
	return <StyledCard>{props.children}</StyledCard>;
}

export default Card;
const StyledCard = styled.div`
	background: #ffffff;
	border-radius: 5px;
	border: 2px solid whitesmoke;
`;
