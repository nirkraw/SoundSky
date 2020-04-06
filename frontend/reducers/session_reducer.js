import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_action";

const _null_session = {
    id: null
}


const sessionReducer = (state = _null_session, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { id: action.user.id });
        // case LOGOUT_CURRENT_USER:
        //     return _null_session;
        default:
            return state;
    }
}

export default sessionReducer; 