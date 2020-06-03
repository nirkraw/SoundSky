import React from "react";
import WaveSurfer from "wavesurfer.js";
import { withRouter } from "react-router-dom";

class Waveform extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: null };
  }

  componentDidMount() {
    if (this.props.track) {
      this.wavesurfer = WaveSurfer.create({
        container: `#waveform-${this.props.track.id}`,
        fillParent: true,
        barHeight: 0.7,
        barWidth: 3,
        //   backgroundColor: "#ffffff",
        waveColor: "#A9A9A9",
        progressColor: "#FF5500",
        height: 100,
        partialRender: true,
        interaction: false,
        removeMediaElementOnDestroy: true,
        closeAudioContext: true,
        responsive: true,
        cursorWidth: 0,
      });
      this.wavesurfer.load(this.props.track.trackUrl);
      this.wavesurfer.setMute();
    }
  }

  componentDidUpdate(prevProps) {
    //   const {track, changeCurrentTrack, currentTrack, changePlayerTrack } = this.props;
    //   // if (prevProps.track.id !== track.id) {
    //   //   this.wavesurfer.destroy();
    //   //   this.wavesurfer = WaveSurfer.create({
    //   //     container: `#waveform-${this.props.track.id}`,
    //   //     fillParent: true,
    //   //     barHeight: 0.7,
    //   //     barWidth: 3,
    //   //     //   backgroundColor: "#ffffff",
    //   //     waveColor: "#A9A9A9",
    //   //     progressColor: "#FF5500",
    //   //     height: 100,
    //   //     partialRender: true,
    //   //     interaction: false,
    //   //     removeMediaElementOnDestroy: true,
    //   //     closeAudioContext: true,
    //   //     responsive: true,
    //   //     cursorWidth: 0,
    //   //   });
    //   //   this.wavesurfer.load(this.props.track.trackUrl);
    //   //   this.wavesurfer.setMute();
    //   // }
    //   if (currentTrack.id === track.id) {
    //     // console.log("waveform track");
    //     // console.log(track.id)
    //     // console.log("_________________________")
    //     // setInterval(() => {
    //       // console.log(this.wavesurfer.container);
    //         this.wavesurfer.getDuration() + 0.01;
    //       if (this.wavesurfer.getDuration() !== 0) {
    //         this.wavesurfer.seekTo(
    //           audio.currentTime / this.wavesurfer.getDuration()
    //         );
    //       }
    //     // }, 1500);
    // }
  }

  render() {
    const { track, currentTrack, currentTrackTime } = this.props;
    if (!track) return null;
    // const audio = document.getElementById("audio");
    
      console.log(currentTrackTime);
  

    if (currentTrack.id === track.id) {
      this.wavesurfer.getDuration() + 0.01;
      
      if (this.wavesurfer.getDuration() !== 0) {
        this.wavesurfer.seekTo(
          currentTrackTime / this.wavesurfer.getDuration()
        );
      }
    }
    return (
      <div className="waveform-container">
        <div id={`waveform-${this.props.track.id}`}></div>
      </div>
    );
  }
}

export default withRouter(Waveform);
