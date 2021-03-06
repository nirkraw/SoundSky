import * as TrackActions from "../../actions/track_actions";
import { connect } from "react-redux";
import TrackIndexItem from "./track_index_item";
import {
  updatePlayerTrack,
  playTrack,
  pauseTrack,
  updatePlayerArtist,
  changeTrack
} from "../../actions/player_actions";
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.currentUserId],
        artist: ownProps.artist,
        track: ownProps.track,
        playing: state.ui.player.playing,
        currentTrack: state.entities.tracks[state.ui.player.trackId]
    })
}

const mapDispatchToProps = dispatch => ({
    updatePlayerTrack: (track) => dispatch(updatePlayerTrack(track)),
    updatePlayerArtist: (artist) => dispatch(updatePlayerArtist(artist)),
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack()),
    openModal: (modal, trackId, artistId) => dispatch(openModal(modal, trackId, artistId)),
    fetchTracks: () => dispatch(TrackActions.fetchTracks()),
    changeTrack:(boolean) => dispatch(changeTrack(boolean))
})


export default connect(mapStateToProps, mapDispatchToProps)(TrackIndexItem);