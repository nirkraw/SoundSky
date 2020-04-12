import * as TrackActions from "../../actions/track_actions";
import {fetchAllUsers} from "../../actions/user_actions"; 
import { connect } from "react-redux";
import TrackIndex from "./track_index";
import {updatePlayerTrack} from "../../actions/player_actions";

const mapStateToProps = (state, ownProps) => {
    return({
        tracks: Object.values(state.entities.tracks),
        artist: state.entities.users[ownProps.match.params.userId],
        currentUser: state.entities.users[state.session.currentUserId]
    })
}

const mapDispatchToProps = dispatch => ({
    editTrack: (userId, track) => dispatch(TrackActions.updateTrack(userId, track)),
    fetchTracks: ()=> dispatch(TrackActions.fetchTracks()),
    deleteTrack: (userId, trackId) => dispatch(TrackActions.deleteTrack(userId, trackId)),
    fetchTrack: (userId, trackId) => dispatch(TrackActions.fetchTrack(userId, trackId)),
    fetchAllUsers: ()=>dispatch(fetchAllUsers()),
    updatePlayerTrack:(track) => dispatch(updatePlayerTrack(track))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);