import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

let defaultState = { 
    name: null, 
    trackId: 0,
    artistId: 0
}

export default function modalReducer(state = defaultState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            let newState = { 
                name: action.modal, 
                trackId: action.trackId, 
                artistId: action.artistId 
            };
            return newState;
        case CLOSE_MODAL:
            return defaultState;
        default:
            return state;
    }
}
