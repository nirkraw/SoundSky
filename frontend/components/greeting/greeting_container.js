import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_action';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]


})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logoutUser()),
    openModal: modal => dispatch(openModal(modal))
    
})



const GreetingContainer = connect(mapStateToProps, mapDispatchToProps)(Greeting);

export default GreetingContainer; 