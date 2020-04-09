import * as TrackActions from "../../actions/track_actions";
import { connect } from "react-redux";
import TrackIndex from "./track_index";

const mapStateToProps = (state, ownProps) => {
    return({tracks: state.entities.tracks,
    artist: Object.values(state.entities.users)[ownProps.match.params.userId],
    currentUser: state.session.currentUser})
}

const mapDispatchToProps = dispatch => ({
    editTrack: (userId, track) => dispatch(TrackUtil.updateTrack(userId, track)),
    fetchTracks: userId => dispatch(TrackUtil.fetchTracks(userId)),
    deleteTrack: (userId, trackId) => dispatch(TrackUtil.deleteTrack(userId, trackId)),
    fetchTrack: (userId, trackId) => dispatch(TrackUtil.fetchTrack(userId, trackId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);