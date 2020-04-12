import React from 'react';

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger 
        this.props.fetchTracks();
    }


    render() {
        const {track} = this.props 
        if (!track) return null; 
        debugger 
       return( <div>
            <audio id="audio" controls controlsList="nodownload">
                <source src={track.trackUrl} type="audio/mp3" />
            </audio>
        </div>
       )
    }
}

export default AudioPlayer; 