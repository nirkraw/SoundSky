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
      <div className="outside-container">
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
          <div className="main-content-and-related-tracks-container">
            <div className="track-show-main-content">
              <div className="write-comment-container">
                <img
                  className="track-show-artist-pic"
                  src={artist.profilePhotoUrl}
                  alt="artist-pic"
                />
                <input
                  className="write-comment-input"
                  type="text"
                  placeholder="Write a comment"
                />
              </div>
              <div className="track-show-buttons-container">
                <div
                  className="track-show-like-button"
                //   onClick={() =>
                //     this.props.openModal("delete", track.id, artist.id)
                //   }
                >
                  <img
                    className="track-show-like-icon"
                    src="/assets/heart.png"
                    alt="heart"
                  />
                  <p>Like</p>
                </div>
                <div
                  className="track-show-edit-button"
                  onClick={() => this.props.openModal("edit", track.id)}
                >
                  <img
                    className="track-show-pencil-icon"
                    src="/assets/pencil.png"
                    alt="pencil"
                  />
                  <p>Edit</p>
                </div>
                <div
                  className="track-show-delete-button"
                  onClick={() =>
                    this.props.openModal("delete", track.id, artist.id)
                  }
                >
                  <img
                    className="track-show-trash-icon"
                    src="/assets/trash.png"
                    alt="pencil"
                  />
                  <p>Delete</p>
                </div>
              </div>
            </div>
            <div className="track-show-related-tracks"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrackShow;