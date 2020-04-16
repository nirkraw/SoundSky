import React from 'react';

class UploadButton extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
       
        return (
            <div className="upload-button-container">
                <div className="upload-grey-box">
                    <h3>Add your new track here</h3>
                    <button onClick={() => this.props.openModal('upload')} className="upload-button">choose files to upload</button>
                </div>
            </div>
        )
    }
}

export default UploadButton; 

