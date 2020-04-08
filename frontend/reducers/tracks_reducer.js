import {RECEIVE_TRACKS, RECEIVE_TRACK, REMOVE_TRACK} from "../actions/track_actions";

const tracksReducer = (state= {}, action) => {
    Object.freeze(state);
    let newState = {}
        switch(action.type) {
            case RECEIVE_TRACKS: 
                return action.tracks
            case RECEIVE_TRACK:
                newState = {[action.track.id]: action.track};
                return Object.assign({}, state, newState);
            case REMOVE_TRACK:
                newState = Object.assign({}, state);
                delete newState[action.trackId];
                return newState;
            default:
                return state;
    }
}

export default tracksReducer; 