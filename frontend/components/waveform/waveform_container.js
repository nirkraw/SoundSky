import { connect } from "react-redux"
import Waveform from './waveform';
import {changeTrack} from "../../actions/player_actions";

const mapStateToProps = (state, ownProps) => {
    return {
      track: ownProps.track,
      playing: state.ui.player.playing,
      artist: state.entities.users[state.ui.player.artistId],
      currentTrack: state.entities.tracks[state.ui.player.trackId],
      changePlayerTrack: state.ui.player.changeTrack,
    };
}

const mapDispatchToProps = (dispatch) => ({
    changeCurrentTrack: (boolean) => dispatch(changeTrack(boolean))
});

const WaveformContainer = connect(mapStateToProps, mapDispatchToProps)(Waveform);
export default WaveformContainer; 