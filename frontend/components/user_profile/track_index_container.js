import * as TrackActions from "../../actions/track_actions";
import {fetchAllUsers} from "../../actions/users_actions"; 
import { connect } from "react-redux";
import TrackIndex from "./track_index";

const mapStateToProps = (state, ownProps) => {
    debugger
    return({tracks: state.entities.tracks,
    artist: Object.values(state.entities.users)[ownProps.match.params.userId],
    currentUser: state.session.currentUser})
}

const mapDispatchToProps = dispatch => ({
    editTrack: (userId, track) => dispatch(TrackActions.updateTrack(userId, track)),
    fetchTracks: userId => dispatch(TrackActions.fetchTracks(userId)),
    deleteTrack: (userId, trackId) => dispatch(TrackActions.deleteTrack(userId, trackId)),
    fetchTrack: (userId, trackId) => dispatch(TrackActions.fetchTrack(userId, trackId)),
    fetchUsers: ()=>dispatch(fetchAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);