import {createLike, destroyLike} from "../utils/like_util";

export const likeTrack = (like) => (dispatch) => createLike(like)

export const unlikeTrack = (likeId) => (dispatch) => destroyLike(likeId);
