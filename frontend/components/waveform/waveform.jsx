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
          
        //    wavesurfer.on('ready', function () {
        //         wavesurfer.play();
        //     });
        }
    }

    componentDidUpdate() {
         const { playing, track, currentTrack } = this.props;
         if (playing && currentTrack.id === track.id) {
           this.wavesurfer.setMute();
           const audio = document.getElementById("audio");
           console.log(audio.currentTime / this.wavesurfer.getDuration());
           this.wavesurfer.seekTo((audio.currentTime/this.wavesurfer.getDuration()));
           this.wavesurfer.play()
         } else {
           this.wavesurfer.pause();
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