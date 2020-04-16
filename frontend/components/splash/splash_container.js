import { connect } from "react-redux"
import Splash from './splash';
import { fetchTracks } from "../../actions/track_actions";
import { fetchAllUsers } from "../../actions/user_actions";


const mapStateToProps = (state) => {
    return ({
            playingTrack: (state.entities.tracks)[state.ui.player.trackId],
            allTracks: Object.values(state.entities.tracks), 
            playing: state.ui.player.playing,
            artist: state.entities.users[state.ui.player.artistId]
        })
}

const mapDispatchToProps = (dispatch) => {
    return({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchUsers: () => dispatch(fetchAllUsers())
    })
}

const SplashContainer = connect(mapStateToProps, mapDispatchToProps)(Splash);
export default SplashContainer; 