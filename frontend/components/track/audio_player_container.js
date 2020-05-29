import { connect } from "react-redux"
import AudioPlayer from './audio_player';
import {fetchTracks} from "../../actions/track_actions";
import {fetchAllUsers} from "../../actions/user_actions";
import { changeTrack, pauseTrack, playTrack } from "../../actions/player_actions";


const mapStateToProps = (state) => { 
    return (
        { track: (state.entities.tracks)[state.ui.player.trackId],
          playing: state.ui.player.playing,
          artist: state.entities.users[state.ui.player.artistId],
          changePlayerTrack: state.ui.player.changeTrack
        }) 
}

const mapDispatchToProps = (dispatch) => ({
  fetchTracks: () => dispatch(fetchTracks()),
  fetchUsers: () => dispatch(fetchAllUsers()),
  changeCurrentTrack: (boolean) => dispatch(changeTrack(boolean)),
  pauseTrack: () => dispatch(pauseTrack()),
  playTrack: () => dispatch(playTrack())
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);