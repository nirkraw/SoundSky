import React from 'react';

class UploadButton extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="upload-button-container">
                <button onClick={() => this.props.openModal('upload')} className="upload-button">choose files to upload</button>
            </div>
        )
    }
}

export default UploadButton; 

