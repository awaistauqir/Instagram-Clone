import { Avatar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Story = ({ name, photoURL }) => {
	return (
		<StyledStory>
			<StyledAvatar src={photoURL} />
			<small>{name}</small>
		</StyledStory>
	);
};

export default Story;
const StyledAvatar = styled(Avatar)`
	&&& {
		height: 56px;
		width: 56px;
		object-fit: contain;
		border-top: 2px solid #fdf497;
		border-bottom: 2px solid #d6249f;
		border-right: 2px solid #fd5949;
		border-left: 2px solid #f29492;
		border-bottom: 2px solid #f29492;
	}
`;
const StyledStory = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 5px;
`;
