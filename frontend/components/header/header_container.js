import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import Header from './header';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    debugger
    return {
        currentUser: state.entities.users[state.session.currentUserId]
}}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logoutUser()),
    openModal: modal => dispatch(openModal(modal))
    
})

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer; 