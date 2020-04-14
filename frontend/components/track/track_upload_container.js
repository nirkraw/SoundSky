import { connect } from 'react-redux';
import TrackUpload from "./track_upload";
import {createTrack} from "../../actions/track_actions";
import {closeModal} from "../../actions/modal_actions";

const MapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.currentUserId],
    errors: state.errors.track 
})

const mapDispatchToProps = (dispatch) => ({
    createTrack: (userId, track) => dispatch(createTrack(userId, track)),
    closeModal: () => dispatch(closeModal())
})

const TrackUploadContainer = connect(MapStateToProps, mapDispatchToProps)(TrackUpload);
export default TrackUploadContainer; 