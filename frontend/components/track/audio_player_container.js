import { connect } from "react-redux"
import AudioPlayer from './audio_player';
import {fetchTracks} from "../../actions/track_actions";


const mapStateToProps = (state) => { 
    return (
        { track: state.entities.tracks[state.ui.player.trackId],
          playing: state.ui.player.playing  
        }) 
}

const mapDispatchToProps = (dispatch) => ({
    fetchTracks: () => dispatch(fetchTracks())
})

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);