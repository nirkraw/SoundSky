import * as TrackActions from "../../actions/track_actions";
import { connect } from "react-redux";
import TrackIndexItem from "./track_index_item";
import { updatePlayerTrack, playTrack, pauseTrack, updatePlayerArtist } from "../../actions/player_actions";

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.currentUserId],
        artist: ownProps.artist,
        track: ownProps.track
    })
}

const mapDispatchToProps = dispatch => ({
    editTrack: (userId, track) => dispatch(TrackActions.updateTrack(userId, track)),
    deleteTrack: (userId, trackId) => dispatch(TrackActions.deleteTrack(userId, trackId)),
    updatePlayerTrack: (track) => dispatch(updatePlayerTrack(track)),
    updatePlayerArtist: (artist) => dispatch(updatePlayerArtist(artist)),
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack()),
})


export default connect(mapStateToProps, mapDispatchToProps)(TrackIndexItem);