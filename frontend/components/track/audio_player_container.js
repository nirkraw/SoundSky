import { connect } from "react-redux"
import AudioPlayer from './audio_player';
import {fetchTracks} from "../../actions/track_actions";
import {fetchAllUsers} from "../../actions/user_actions";


const mapStateToProps = (state) => { 
    debugger 
    return (
        { track: (state.entities.tracks)[state.ui.player.trackId],
          playing: state.ui.player.playing,
          artist: state.entities.users[state.ui.player.artistId] 
        }) 
}

const mapDispatchToProps = (dispatch) => ({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchUsers: () => dispatch(fetchAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);