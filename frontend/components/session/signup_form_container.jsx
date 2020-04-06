import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signUpUser } from '../../actions/session_action';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
    formType: "signup",
    errors: state.errors.session
})

const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(signUpUser(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}> Login</button>
    ),
    closeModal: () => dispatch(closeModal())
})


const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);

export default SignupFormContainer;