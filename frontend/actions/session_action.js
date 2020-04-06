import { login, logout, signUp } from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const INVALID_LOGIN_INFO = "INVALID_LOGIN_INFO";

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const errorHandler = (errors) => ({
    type: INVALID_LOGIN_INFO,
    errors
})

export const signUpUser = form_user => dispatch => signUp(form_user)
    .then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(errorHandler(errors.responseJSON))
    );

export const loginUser = form_user => dispatch => login(form_user)
    .then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(errorHandler(errors.responseJSON))
    );



export const logoutUser = () => dispatch => logout()
    .then(
        (user) => dispatch(receiveCurrentUser(null)),
        errors => dispatch(errorHandler(errors.responseJSON))
    );