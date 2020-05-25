import React from 'react'
import formatUploadTime from "../../utils/time_format_util";

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTracks();
    this.props.fetchAllUsers();
    this.props.changeTrack(false);
  }

  playTrack() {
    this.props.updatePlayerTrack(this.props.track);
    this.props.updatePlayerArtist(this.props.artist);
    this.props.playTrack();
    this.props.changeTrack(true);
  }

  pauseTrack() {
    this.props.pauseTrack();
  }

  render() {
    const { track, artist, playing, currentTrack } = this.props;
    if (!track) return null;
    return (
      <div className="track-show-main-container">
        <div className="track-show-top-banner">
          <div className="track-show-play-pause-buttons-container">
            {playing && track.id === currentTrack.id ? (
              <img
                onClick={() => this.pauseTrack()}
                className="track-show-pause-button"
                src="/assets/pause-button-2.png"
                alt="pause-button"
              />
            ) : (
              <img
                onClick={() => this.playTrack()}
                className="track-show-play-button"
                src="/assets/play-button-2.png"
                alt="play-button"
              />
            )}
          </div>
          <h1 className="track-show-artist">{artist.username}</h1>
          <h1 className="track-show-title">{track.title}</h1>
          <p className="track-show-uploaded-time">
            {formatUploadTime(track.created_at)}
          </p>
          <p className="track-show-track-genre">{`#${track.genre}`}</p>
          <img
            className="track-show-album-pic"
            src={track.photoUrl}
            alt="album pic"
          />
        </div>
      </div>
    );
  }
}

export default TrackShow;