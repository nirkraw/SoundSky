import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class Waveform extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if(this.props.track) {
            this.wavesurfer = WaveSurfer.create({
              container: `#waveform-${this.props.track.id}`,
              fillParent: true,
              barHeight: 0.7,
              barWidth: 3,
              backgroundColor: "#ffffff",
              waveColor: "#A9A9A9",
              height: 100,
              partialRender: true,
              interaction: false,
              removeMediaElementOnDestroy: true,
              responsive: true,
              cursorWidth: 0,
            });
           this.wavesurfer.load(this.props.track.trackUrl);
           this.wavesurfer.setMute();
           
        }
    }
    
    componentDidUpdate() {
        const {track, currentTrack } = this.props;
        if (currentTrack.id === track.id) {
           setInterval(() => {
               this.wavesurfer.seekTo(
                   audio.currentTime / this.wavesurfer.getDuration()  )
           }, 500);
         }
    }


    render() {
       
        return (
        <div className="waveform-container">
            <div id={`waveform-${this.props.track.id}`}></div>
        </div>
        )
    }
}

export default Waveform; 