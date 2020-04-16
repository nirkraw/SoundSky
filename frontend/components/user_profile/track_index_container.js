import { fetchUserTracks } from "../../actions/track_actions";
import { fetchAllUsers } from "../../actions/user_actions"; 
import { connect } from "react-redux";
import TrackIndex from "./track_index";
import { closeModal } from "../../actions/modal_actions";


const mapStateToProps = (state, ownProps) => {
    return({
        tracks: Object.values(state.entities.userTracks),
        artist: state.entities.users[ownProps.match.params.userId],
        currentUser: state.entities.users[state.session.currentUserId]
    })
}

const mapDispatchToProps = dispatch => ({
    fetchUserTracks: (userId)=> dispatch(fetchUserTracks(userId)),
    fetchAllUsers: ()=>dispatch(fetchAllUsers()),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);