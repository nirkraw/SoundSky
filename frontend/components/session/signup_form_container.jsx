import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signUpUser } from '../../actions/session_actions';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
    formType: "Create your SoundSky account",
    button: "Continue",
    errors: state.errors.session
})

const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(signUpUser(user)),
    closeModal: () => dispatch(closeModal())
})


const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);

export default SignupFormContainer;