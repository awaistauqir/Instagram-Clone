import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ProfileInfo from './ProfileInfo';
import SuggestedUser from './SuggestedUser';
import faker from 'faker';
const Sidebar = () => {
	const user = useSelector((state) => state.user.user);
	return (
		<Wrapper>
			<StyledSidebar>
				<ProfileInfo name={user.username} username={user.email.split('@')[0]} />
				<SuggestionsHeader>
					<p>Suggestions For You</p>
					<small>See all</small>
				</SuggestionsHeader>
				<Suggestions>
					<SuggestedUser
						username={faker.name.findName()}
						isFollowing={false}
						photoURL={faker.image.avatar()}
					/>
					<SuggestedUser
						username={faker.name.findName()}
						isFollowing={false}
						photoURL={faker.image.avatar()}
					/>
					<SuggestedUser
						username={faker.name.findName()}
						isFollowing={true}
						photoURL={faker.image.avatar()}
					/>
				</Suggestions>
			</StyledSidebar>
		</Wrapper>
	);
};
export default Sidebar;
const Wrapper = styled.div`
	position: sticky;
	height: 100vh;
	width: 33%;
	top: 0;
`;
const StyledSidebar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	/* margin-top: 20px; */
	gap: 35px;
	/* height: 100vh; */
	position: sticky;
	top: 92px;
	right: 150px;
	/* z-index: 11; */
`;
const SuggestionsHeader = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 25%;
	align-items: center;
	font-size: 14px;
	width: 100%;
	p {
		color: gray;
		font-weight: 600;
	}
	small {
		color: #262626;
		font-weight: 600;
		cursor: pointer;
	}
`;
const Suggestions = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 7px;
`;
