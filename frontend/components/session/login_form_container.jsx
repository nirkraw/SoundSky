import { connect } from 'react-redux';
import SessionForm from './session_form';
import { loginUser } from '../../actions/session_action';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
    formType: "login",
    errors: state.errors.session
})

const mapDispatchToProps = (dispatch) => ({
    processForm: user => dispatch(loginUser(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>Signup</button>
    ),
    closeModal: () => dispatch(closeModal())
})


const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);

export default LoginFormContainer;