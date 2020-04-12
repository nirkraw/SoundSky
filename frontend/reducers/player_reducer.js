import { UPDATE_PLAYER_TRACK } from '../actions/player_actions';

let defaultState = { trackId: 1 }

const playerReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case UPDATE_PLAYER_TRACK:
            return newState.trackId = action.track.id;
        default:
            return state
    }

}

export default playerReducer; 