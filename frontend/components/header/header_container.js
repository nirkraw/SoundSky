import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import Header from './header';
import { openModal } from '../../actions/modal_actions';
import {withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.currentUserId]
}}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logoutUser()),
    openModal: modal => dispatch(openModal(modal))
    
})

export const HeaderContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));


