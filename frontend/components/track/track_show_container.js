import { connect } from "react-redux";
import TrackShow from "./track_show";
import { fetchTracks} from "../../actions/track_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import {
  updatePlayerTrack,
  playTrack,
  pauseTrack,
  updatePlayerArtist,
  changeTrack,
} from "../../actions/player_actions";


const mapStateToProps = (state, ownProps) => ({
  track: state.entities.tracks[ownProps.match.params.trackId],
  artist: state.entities.users[ownProps.match.params.userId],
  playing: state.ui.player.playing,
  currentTrack: state.entities.tracks[state.ui.player.trackId],
});

const mapDispatchToProps = (dispatch) => ({
  updatePlayerTrack: (track) => dispatch(updatePlayerTrack(track)),
  updatePlayerArtist: (artist) => dispatch(updatePlayerArtist(artist)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack()),
  fetchTracks: () => dispatch(fetchTracks()),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  changeTrack: (boolean) => dispatch(changeTrack(boolean)),
});

const TrackShowContainer = connect(mapStateToProps, mapDispatchToProps)(TrackShow)
export default TrackShowContainer;