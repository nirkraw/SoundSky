import { 
    UPDATE_PLAYER_TRACK,
    PLAY_TRACK, 
    PAUSE_TRACK,
    UPDATE_PLAYER_ARTIST } 
from '../actions/player_actions';

let defaultState = {
     trackId: 4,
     artistId: 14,
     playing: false  
    }

const playerReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case UPDATE_PLAYER_TRACK:
            newState.trackId = action.track.id;
            return newState; 
        case UPDATE_PLAYER_ARTIST:
            newState.artistId = action.artist.id;
            return newState; 
        case PLAY_TRACK:
            newState.playing = true 
            return newState; 
        case PAUSE_TRACK:
            newState.playing = false
            return newState; 
        default:
            return state
    }

}

export default playerReducer; 