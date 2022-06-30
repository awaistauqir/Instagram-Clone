import React from 'react';
import styled from 'styled-components';
const Comment = (props) => {
	return (
		<StyledComment>
			<small style={{ fontWeight: 'bold' }}>{props.username + ' '}</small>
			<small>{props.commentText}</small>
		</StyledComment>
	);
};

const CommentSection = (props) => {
	return (
		<StyledCommentSection>
			{props.comments.map((comment) => (
				<Comment
					username={comment.username}
					commentText={comment.commentText}
					id={comment.id}
					key={comment.id}
				/>
			))}
		</StyledCommentSection>
	);
};

export default CommentSection;
const StyledCommentSection = styled.div`
	color: #262626;
	max-height: 60px;
	height: fit-content;
	overflow-y: scroll;
`;
const StyledComment = styled.div``;
