import {fetchUsers} from "../utils/user_util";

export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = (users) => {
    return({
    type: RECEIVE_USERS,
    users
    })
}

export const fetchAllUsers = () => dispatch => (
    (fetchUsers())
    .then(users => {
       return dispatch(receiveUsers(users))
    })
    
)