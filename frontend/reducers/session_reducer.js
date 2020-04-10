import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../actions/session_actions";
// import merge from 'lodash/merge';

const _null_session = {
    currentUserId: null
}


const sessionReducer = (state = _null_session, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let newCurrentUser = {currentUserId: action.user.id};
            return newCurrentUser; 
        case LOGOUT_CURRENT_USER:
            return _null_session;
        default:
            return state;
    }
}

export default sessionReducer; 