import { connect } from 'react-redux';
import TrackEdit from './track_edit';
import { closeModal } from "../../actions/modal_actions";
import {fetchTracks, updateTrack} from "../../actions/track_actions";


const MapStateToProps = (state, ownProps) => {
    return({
        currentUser: state.entities.users[state.session.currentUserId],
        errors: state.errors.track,
        track: state.entities.tracks[ownProps.trackId]
    })
}

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    fetchTracks: () => dispatch(fetchTracks()),
    updateTrack: (track, trackId) => dispatch(updateTrack(track, trackId))
})

const TrackEditContainer = connect(MapStateToProps, mapDispatchToProps)(TrackEdit);
export default TrackEditContainer; 