import React from 'react';
import styled from 'styled-components';
import Card from '../Styles/Card';
import Story from './Story';
import faker from 'faker';

const StoryContainer = () => {
	return (
		<Wrapper>
			<Card>
				<StyledStorieContainer>
					{[...Array(8)].map((elementInArray, index) => (
						<Story
							name={faker.name.firstName()}
							photoURL={faker.image.avatar()}
						/>
					))}
				</StyledStorieContainer>
			</Card>
		</Wrapper>
	);
};

export default StoryContainer;
const StyledStorieContainer = styled.div`
	background: #ffff;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 13px;
	padding: 20px 10px;
	/* width: 100%; */
	overflow-x: scroll;
`;
const Wrapper = styled.div`
	overflow: hidden;
	height: 140px;
	/* flex: 0.67; */
	width: 100%;
	margin-right: 25px;
	margin-bottom: 50px;
`;
