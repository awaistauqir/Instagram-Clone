import Avatar from '@mui/material/Avatar';
import React, { useRef, useState } from 'react';
import Card from '../Styles/Card';
import styled from 'styled-components';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import CommentSection from './CommentSection';
import ReactTimeAgo from 'react-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import TimeAgo from 'javascript-time-ago';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../../Firebase';
import { useSelector } from 'react-redux';
TimeAgo.addDefaultLocale(en);
const Post = (props) => {
	const user = useSelector((state) => state.user.user);
	const commentRef = useRef();
	const [comments, setComments] = useState(props.comments);
	const addComment = function () {
		const commentContent = commentRef.current.value;
		if (commentContent.length > 0) {
			const commentsServerRef = doc(db, 'posts', props.id);
			setComments([
				...comments,
				{
					username: user.username,
					commentText: commentRef.current.value,
					id: Math.random(),
				},
			]);

			updateDoc(commentsServerRef, {
				comments: arrayUnion({
					username: user.username,
					commentText: commentRef.current.value,
					id: Math.random(),
				}),
			});

			commentRef.current.value = '';
		}
	};

	return (
		<Card>
			<PostHeader>
				<div>
					<Avatar src={props.photoURL} />
					<small>{props.username}</small>
				</div>
				<MoreHorizOutlinedIcon />
			</PostHeader>
			<Image src={props.image} />
			<PostDetails>
				<PostOptions>
					<div>
						<FavoriteBorderOutlinedIcon />
						<ModeCommentOutlinedIcon />
						<ShareOutlinedIcon />
					</div>
					<BookmarkBorderOutlinedIcon />
				</PostOptions>
				<Likes>{`${Math.floor(Math.random() * 100)} likes`}</Likes>
				<PostCaption>
					<span style={{ fontWeight: 'bold' }}>{props.username + ' '}</span>
					<span>{props.caption}</span>
				</PostCaption>
				<Comments>{`${props.comments.length} comments`}</Comments>
				<CommentSection comments={comments} />
				<PostTime>
					<ReactTimeAgo
						locale='en-US'
						date={
							props.postTime !== null ? props.postTime.toDate() : Date.now()
						}
						timeStyle='twitter'
					/>
				</PostTime>
				<AddComment>
					<input type='text' placeholder='Add a Comment...' ref={commentRef} />
					<button onClick={addComment}>Post</button>
				</AddComment>
			</PostDetails>
		</Card>
	);
};

export default Post;

const PostHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 12px 15px;

	> div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		> small {
			font-weight: bold;
		}
	}
`;
const Image = styled.img`
	width: 100%;
	object-fit: contain;
`;
const PostOptions = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	svg {
		width: 24px;
		height: 24px;
		object-fit: contain;
		cursor: pointer;
	}
	> div {
		display: flex;
		gap: 15px;
	}
`;
const PostDetails = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 10px;
	width: 100%;
`;
const Likes = styled.small`
	color: #262626;
	font-weight: bold;
`;
const Comments = styled.small`
	color: gray;
`;
const PostCaption = styled.div`
	color: #262626;
	font-size: 12px;
`;
const PostTime = styled.div`
	font-size: small;
	color: gray;
`;
const AddComment = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	> input {
		flex: 0.95;
		outline: none;
		border: none;
	}
	button {
		outline: none;
		border: none;
		color: #30a8f6;
		background: none;
		flex: 0.05;
		cursor: pointer;
	}
`;
