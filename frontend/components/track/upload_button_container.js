import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import UploadButton from "./upload_button";

const mapStateToProps = (state) => ({
    formType: "does this work"
})

const MapDispatchToProps = (dispatch) => ({
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, MapDispatchToProps)(UploadButton); 