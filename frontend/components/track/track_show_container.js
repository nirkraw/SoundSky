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
import { openModal } from "../../actions/modal_actions";
import {likeTrack, unlikeTrack } from "../../actions/like_actions";
import {
  createNewComment,
  destroyNewComment,
} from "../../actions/comment_action";


const mapStateToProps = (state, ownProps) => ({
  track: state.entities.tracks[ownProps.match.params.trackId],
  tracks: state.entities.tracks,
  artist: state.entities.users[ownProps.match.params.userId],
  users: state.entities.users,
  playing: state.ui.player.playing,
  currentTrack: state.entities.tracks[state.ui.player.trackId],
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = (dispatch) => ({
  updatePlayerTrack: (track) => dispatch(updatePlayerTrack(track)),
  updatePlayerArtist: (artist) => dispatch(updatePlayerArtist(artist)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack()),
  fetchTracks: () => dispatch(fetchTracks()),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  changeTrack: (boolean) => dispatch(changeTrack(boolean)),
  openModal: (modal, trackId, artistId) => dispatch(openModal(modal, trackId, artistId)),
  likeTrack: (like) => dispatch(likeTrack(like)),
  unlikeTrack: (likeId) => dispatch(unlikeTrack(likeId)),
  createNewComment: (comment) => dispatch(createNewComment(comment)),
  destroyNewComment: (commentId) => dispatch(destroyNewComment(commentId))

});

const TrackShowContainer = connect(mapStateToProps, mapDispatchToProps)(TrackShow)
export default TrackShowContainer;