import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../actions/session_action";
import merge from 'lodash/merge';

const _null_session = {
    currentUser: null
}


const sessionReducer = (state = _null_session, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const currentUser = action.currentUser;
            return merge({}, { currentUser });
        case LOGOUT_CURRENT_USER:
            return _null_session;
        default:
            return state;
    }
}

export default sessionReducer; 