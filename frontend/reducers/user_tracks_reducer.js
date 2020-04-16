import {RECEIVE_USER_TRACKS } from "../actions/track_actions";


const userTracksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_TRACKS:
            return action.tracks
        default:
            return state;
    }
}

export default userTracksReducer; 