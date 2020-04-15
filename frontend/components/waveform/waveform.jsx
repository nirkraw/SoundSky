import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class Waveform extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger 
        if(this.props.track) {
            this.wavesurfer = WaveSurfer.create({
                container: '#waveform',
                fillParent: true,
                barHeight: 1,
                barWidth: 2,
                backgroundColor: "#D2EDD4", 
                waveColor: "blue",
                height: 200,
                partialRender: true,
                xhr: {cache: 'default', mode: 'cors', method: 'GET'}
            })
            this.wavesurfer.load(this.props.track.trackUrl);
            this.wavesurfer.on('ready', function () {
                wavesurfer.play();
            });
        }
    }


    render() {
        return(
            <div id="waveform"></div>
        )
    }
}

export default Waveform; 