import { connect } from 'react-redux';
import SessionForm from './session_form';
import { loginUser } from '../../actions/session_action';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
    formType: "Sign into your SoundSky account",
    button: "Sign In",
    errors: state.errors.session,
    currentUser: state.session.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(loginUser(user)),
    closeModal: () => dispatch(closeModal())
})


const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);

export default LoginFormContainer;