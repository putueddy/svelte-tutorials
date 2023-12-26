import { json } from '@sveltejs/kit';
import { comments } from '$lib/comments';

export function GET(requestEvent) {
	const { params } = requestEvent;
	const { commentId } = params;
	const comment = comments.find((comment) => comment.id === parseInt(commentId));
	return json(comment);
}

export async function PATCH(requestEvent) {
	const { params, request } = requestEvent;
	const { commentId } = params;
	const { text } = await request.json();
	const comment = comments.find((comment) => comment.id === parseInt(commentId));
	comment.text = text;
	return json(comment);
}

export async function DELETE(requestEvent) {
	const { params } = requestEvent;
	const { commentId } = params;
	const deleteComment = comments.find((comment) => comment.id === parseInt(commentId));
	const commentIndex = comments.findIndex((comment) => comment.id === parseInt(commentId));
	comments.splice(commentIndex, 1);
	return json(deleteComment);
}
