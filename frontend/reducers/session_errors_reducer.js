import { RECEIVE_CURRENT_USER, INVALID_LOGIN_INFO } from "../actions/session_action";

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type){
        case INVALID_LOGIN_INFO:
            return action.errors; 
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer;