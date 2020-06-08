import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import TrackUploadContainer from '../track/track_upload_container';
import TrackEditContainer from '../track/track_edit_container';
import TrackDeleteContainer from '../track/track_delete_container';

function Modal({ modal, closeModal, trackId, artistId }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'upload':
            component = <TrackUploadContainer />;
            break
        case "edit" :
            component = <TrackEditContainer trackId={trackId}/>;
            break;
        case "delete" :
            component= <TrackDeleteContainer trackId={trackId} artistId={artistId}/>;
            break 
        default:
            return null;
    }
  
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal.name, 
        trackId: state.ui.modal.trackId,
        artistId: state.ui.modal.artistId 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
