import React, { useEffect, useState } from 'react';
import StoryContainer from '../Components/Stories/StoryContainer';
import Container from '../Components/Styles/Container';
import styled from 'styled-components';
import Sidebar from '../Components/Sidebar/Sidebar';
import Post from '../Components/Post/Post';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import AddModal from '../Components/Post/AddModal';
import { collection, orderBy, query, onSnapshot } from 'firebase/firestore';
import { db } from '../Firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/user/userSlice';
function Main() {
	const [posts, setPosts] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const user = useSelector(selectUser);
	const showModalHanlder = () => {
		setShowModal(true);
	};
	const hideModalHandler = () => {
		setShowModal(false);
	};
	const getPosts = async function () {
		onSnapshot(
			query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
			(snapShot) => {
				setPosts(
					snapShot.docs.map((doc) => {
						return {
							id: doc.id,
							data: doc.data(),
						};
					})
				);
				setIsLoading(false);
			}
		);
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<Container>
			{showModal && (
				<AddModal onShow={showModalHanlder} onHide={hideModalHandler} />
			)}
			<StyledMain>
				<MainBody>
					<StoryContainer />
					<PostsContainer>
						<AddButton
							aria-label='add'
							onClick={() => {
								setShowModal(true);
							}}>
							<AddIcon />
						</AddButton>

						{!isLoading &&
							posts.map(
								({
									id,
									data: { caption, username, timestamp, postImage, comments,photoURL },
								}) => (
									<Post
										key={id}
										image={postImage}
										caption={caption}
										comments={comments}
										postTime={timestamp}
										username={username}
										photoURL={photoURL}
										id={id}
									/>
								)
							)}
					</PostsContainer>
				</MainBody>
				<Sidebar />
			</StyledMain>
		</Container>
	);
}

export default Main;
const StyledMain = styled.div`
	margin-top: 35px;
	display: flex;
	justify-content: space-between;
`;

const MainBody = styled.main`
	width: 60%;
	height: fit-content;
`;
const PostsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 25px;
`;
const AddButton = styled(Fab)`
	text-align: center;
	margin-bottom: center;
`;
