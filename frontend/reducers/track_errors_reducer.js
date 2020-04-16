import {  RECEIVE_TRACK_ERRORS } from "../actions/track_actions";
import { CLOSE_MODAL } from '../actions/modal_actions';

const trackErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TRACK_ERRORS:
            return action.errors;
        case CLOSE_MODAL:
            return [];
        default:
            return state;
    }
}

export default trackErrorsReducer;