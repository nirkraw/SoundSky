import { fetchTracks } from "../../actions/track_actions";
import { fetchAllUsers } from "../../actions/user_actions"; 
import { connect } from "react-redux";
import TrackIndex from "./track_index";


const mapStateToProps = (state, ownProps) => {
    return({
        tracks: Object.values(state.entities.tracks),
        artist: state.entities.users[ownProps.match.params.userId],
        currentUser: state.entities.users[state.session.currentUserId]
    })
}

const mapDispatchToProps = dispatch => ({
    fetchTracks: ()=> dispatch(fetchTracks()),
    fetchAllUsers: ()=>dispatch(fetchAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);