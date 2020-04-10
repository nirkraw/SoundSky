import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {RECEIVE_USERS} from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
    debugger 
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_USERS:
            return action.users
        case RECEIVE_CURRENT_USER:
            newState[action.user.id] = action.user;
            return newState 
        default:
            return state;
    }
}

export default usersReducer;

