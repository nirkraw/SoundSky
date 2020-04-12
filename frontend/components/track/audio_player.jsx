import React from 'react';

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTracks();
    }

    componentDidUpdate() {
        const audio = document.getElementById("audio")
        audio.src = this.props.track.trackUrl
            if (this.props.playing) {
                audio.play();
            } else {
                audio.pause();
            }
    }

    render() {
       const {track} = this.props 
       if (!track) return null; 
       return( 
       <div>
            <audio id="audio" 
                controls controlsList="nodownload">
                <source type="audio/mp3" />
            </audio>
       </div>
       )
    }
}

export default AudioPlayer; 