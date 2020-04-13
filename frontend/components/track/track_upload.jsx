import React from 'react'

class TrackUpload extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div className="upload-button-container">
                <button className="upload-button">choose files to upload</button>
            </div>
        )
    }
}

export default TrackUpload; 