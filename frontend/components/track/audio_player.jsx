import React from "react";
import { NavLink } from "react-router-dom";

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  componentDidUpdate() {
    const {
      track,
      playing,
      changePlayerTrack,
      changeCurrentTrack,
    } = this.props;

    const audio = document.getElementById("audio");
    const audioContainer = document.getElementsByClassName(
      "audio-player-container"
      )[0];
      
      if (audio && changePlayerTrack) {
        audio.src = track.trackUrl;
        debugger
        audioContainer.classList.remove("none");
        changeCurrentTrack(false);
      
    }
    if (audio) {
      if (playing) {
        audio.play();
        // changeCurrentTrack(false);
      } else {
        audio.pause();
      }
    }

    setInterval(() => {
      if (audio && audio.paused) {
        this.props.pauseTrack();
      }
      if (audio && !audio.paused) {
        this.props.playTrack();
      }
    }, 500);
  }

  render() {
    const { track, artist } = this.props;
    if (!track || !artist) return null;

    return (
     <footer className="audio-player-container none">
          <div className="audio-player">
            <audio id="audio" controls controlsList="nodownload">
              <source type="audio/mp3" />
            </audio>
          </div>
          <div className="audio-player-info">
            <div className="audio-player-artist-pic">
              <img
                className="audio-player-artist-pic-img"
                src={this.props.artist.profilePhotoUrl}
                alt="ArtistProfilePic"
              />
            </div>
            <div className="audio-player-artist-info">
              <NavLink
                to={`/users/${artist.id}`}
                className="audio-player-artist-name"
              >
                {artist.username}
              </NavLink>
              <p className="audio-player-track-title">{track.title}</p>
            </div>
          </div>
        </footer>
    );
  }
}

export default AudioPlayer;
