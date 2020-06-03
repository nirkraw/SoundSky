import React from "react";
import WaveSurfer from "wavesurfer.js";

class Waveform extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.track) {
      this.wavesurfer = WaveSurfer.create({
        container: `#waveform-${this.props.track.id}`,
        fillParent: true,
        barHeight: 0.7,
        barWidth: 3,
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

  componentDidUpdate() {
    const { track, currentTrack, currentTrackTime } = this.props;

    if (currentTrack.id === track.id) {
      this.wavesurfer.seekTo(currentTrackTime / this.wavesurfer.getDuration());
    } else {
      this.wavesurfer.stop();
    }
  }

  componentWillUnmount() {
    this.wavesurfer.seekTo(0);
  }

  render() {
    if (!this.props.track) return null;

    return (
      <div className="waveform-container">
        <div id={`waveform-${this.props.track.id}`}></div>
      </div>
    );
  }
}

export default Waveform;
