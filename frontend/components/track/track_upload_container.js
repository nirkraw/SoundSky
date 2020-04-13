import { connect } from 'react-redux';
import TrackUpload from "./track_upload";
import {createTrack} from "../../actions/track_actions";

const MapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.currentUserId]
})

const mapDispatchToProps = (dispatch) => ({
    createTrack: (userId, track) => dispatch(createTrack(userId, track))
})

export default connect(MapStateToProps, mapDispatchToProps)(TrackUpload);