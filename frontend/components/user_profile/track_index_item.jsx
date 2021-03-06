import React from 'react';
import {NavLink} from 'react-router-dom';
import formatUploadTime from "../../utils/time_format_util";
import WaveFormContainer from "../waveform/waveform_container";

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.deleteOrEdit = this.deleteOrEdit.bind(this);
  }

  componentDidMount() {
    this.props.fetchTracks();
    this.props.changeTrack(false);
  }

  playTrack() {
    if (this.props.currentTrack.id !== this.props.track.id) {
      this.props.changeTrack(true);
    }
    this.props.updatePlayerTrack(this.props.track);
    this.props.updatePlayerArtist(this.props.artist);
    this.props.playTrack();
  }

  pauseTrack() {
    this.props.pauseTrack();
    this.props.changeTrack(false);
  }

  deleteOrEdit(e, type) {
    e.preventDefault();
    this.props.openModal(type, this.props.track.id, this.props.currentUser.id);
  }

  render() {
    const { track, artist, currentUser, playing, currentTrack } = this.props;
    if (!currentTrack) return null;
    return (
      <li className="track-index-with-buttons" key={this.props.key}>
        <div className="track-index-item-container">
          <img
            className="track-image"
            src={track.photoUrl}
            alt="track_picture"
          />
          <div className="play-pause-buttons-container">
            {playing && track.id === currentTrack.id ? (
              <img
                onClick={() => this.pauseTrack()}
                className="pause-button"
                src="/assets/pause-button-2.png"
                alt="pause-button"
              />
            ) : (
              <img
                onClick={() => this.playTrack()}
                className="play-button"
                src="/assets/play-button-2.png"
                alt="play-button"
              />
            )}
          </div>
          <div className="track-info-and-waveform-container">
            <div className="track-info-container">
              <div className="track-info">
                <NavLink
                  to={`/users/${artist.id}`}
                  className="track-artist-name"
                >
                  {artist.username}
                </NavLink>
                <br />
                <NavLink
                  to={`/users/${artist.id}/${track.id}`}
                  className="track-title"
                >
                  {track.title}
                </NavLink>
              </div>
              <div className="track-genre-time">
                <p className="uploaded-time">
                  {formatUploadTime(track.created_at)}
                </p>
                {track.genre ? (
                  <p className="track-genre">{`#${track.genre}`}</p>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
            <WaveFormContainer track={track} />
          </div>
        </div>
        {currentUser === artist ? (
          <div className="edit-delete-buttons-container">
            <div
              className="edit-button"
              onClick={(e) => this.deleteOrEdit(e, "edit")}
            >
              <img
                className="pencil-icon"
                src="/assets/pencil.png"
                alt="pencil"
              />
              <p>Edit</p>
            </div>
            <div
              className="delete-button"
                onClick={(e)=> this.deleteOrEdit(e, "delete")}
            >
              <img
                className="trash-icon"
                src="/assets/trash.png"
                alt="pencil"
              />
              <p>Delete</p>
            </div>
          </div>
        ) : (
          <div className="edit-delete-buttons-container"></div>
        )}
      </li>
    );
  }
}

export default TrackIndexItem;