import { login, logout, signUp } from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = ({user}) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        user
   })
};

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const errorHandler = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
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
        () => dispatch(logoutCurrentUser()),
        errors => dispatch(errorHandler(errors.responseJSON))
    );