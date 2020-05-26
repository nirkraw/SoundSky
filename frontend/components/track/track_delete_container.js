import { connect } from 'react-redux';
import TrackDelete from './track_delete';
import {deleteTrack, fetchTracks} from '../../actions/track_actions';
import { fetchAllUsers} from '../../actions/user_actions';
import {
  updatePlayerTrack,
  playTrack,
  pauseTrack,
  updatePlayerArtist,
  changeTrack,
} from "../../actions/player_actions";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
    return {
    currentUser: state.entities.users[state.session.currentUserId],
    errors: state.errors.track,
    track: state.entities.tracks[ownProps.trackId],
    playing: state.ui.player.playing,
    artist: state.entities.users[ownProps.artistId],
    currentTrack: (state.entities.tracks)[state.ui.player.trackId],
    }
}

const mapdispatchToProps = (dispatch) => ({
  deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
  closeModal: () => dispatch(closeModal()),
  fetchTracks: () => dispatch(fetchTracks()),
  fetchUsers: () => dispatch(fetchAllUsers()),
  updatePlayerTrack: (track) => dispatch(updatePlayerTrack(track)),
  updatePlayerArtist: (artist) => dispatch(updatePlayerArtist(artist)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack()),
  changeTrack: (boolean) => dispatch(changeTrack(boolean)),
});

const TrackDeleteContainer = connect(mapStateToProps, mapdispatchToProps)(TrackDelete);
export default TrackDeleteContainer; 