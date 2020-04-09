import {fetchUsers} from "../utils/user_util";

export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
})

export const fetchAllUsers = () => dispatch => (
    dispatch(fetchUsers())
    .then(users => receiveUsers(users))
)