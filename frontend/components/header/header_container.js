import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_action';
import Header from './header';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
    currentUser: state.session.currentUser
}}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logoutUser()),
    openModal: modal => dispatch(openModal(modal))
    
})

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer; 