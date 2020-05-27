import { createComment, destroyComment } from "../utils/comment_util";

export const createNewComment = (comment) => (dispatch) => createComment(comment);

export const destroyNewComment = (commentId) => (dispatch) => destroyComment(commentId);
