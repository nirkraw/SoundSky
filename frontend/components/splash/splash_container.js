import { connect } from "react-redux"
import Splash from './splash';
import { fetchTracks } from "../../actions/track_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import { openModal } from '../../actions/modal_actions';
import { updatePlayerTrack, playTrack, pauseTrack, updatePlayerArtist } from "../../actions/player_actions";


const mapStateToProps = (state) => {
    return ({
            currentTrack: (state.entities.tracks)[state.ui.player.trackId],playingTrack: (state.entities.tracks)[state.ui.player.trackId],
            allTracks: Object.values(state.entities.tracks), 
            allUsers: state.entities.users,
            playing: state.ui.player.playing,
            currentUser: state.entities.users[state.session.currentUserId]
        })
}

const mapDispatchToProps = (dispatch) => {
    return({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchUsers: () => dispatch(fetchAllUsers()),
    openModal: modal => dispatch(openModal(modal)),
    updatePlayerTrack: (track) => dispatch(updatePlayerTrack(track)),
    updatePlayerArtist: (artist) => dispatch(updatePlayerArtist(artist)),
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack())
    })
}

const SplashContainer = connect(mapStateToProps, mapDispatchToProps)(Splash);
export default SplashContainer; 