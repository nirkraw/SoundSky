import { connect } from "react-redux"
import Waveform from './waveform';

const mapStateToProps = (state, ownProps) => {
    return (
        {
            track: ownProps.track,
            playing: state.ui.player.playing,
            artist: state.entities.users[state.ui.player.artistId]
        })
}

// const mapDispatchToProps = (dispatch) => ({
  
// })

const WaveformContainer = connect(mapStateToProps, null)(Waveform);
export default WaveformContainer; 