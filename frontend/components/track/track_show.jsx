import React from "react";
import formatUploadTime from "../../utils/time_format_util";
import { NavLink } from "react-router-dom";

class TrackShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { comment: "" };

    this.playTrack = this.playTrack.bind(this);
    this.pauseTrack = this.pauseTrack.bind(this);
    this.likeTrack = this.likeTrack.bind(this);
    this.unlikeTrack = this.unlikeTrack.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.createComment = this.createComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.findRelatedTrack = this.findRelatedTrack.bind(this);
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
    this.props.changeTrack(true);
  }

  likeTrack(e) {
    if (!this.props.currentUser) {
      this.props.openModal("login");
      return null;
    }
    e.preventDefault();
    this.props.likeTrack({
      track_id: this.props.track.id,
      user_id: this.props.artist.id,
    });
    this.props.fetchTracks();
  }

  unlikeTrack(e, likeId) {
    if (!this.props.currentUser) {
      this.props.openModal("login");
      return null;
    }
    e.preventDefault();
    this.props.unlikeTrack(likeId);
    this.props.fetchTracks();
  }

  handleInput(e) {
     if (!this.props.currentUser) {
       this.props.openModal("login");
       return null;
     }
    e.preventDefault();
    this.setState({ comment: e.target.value });
  }

  createComment(e) {
    if (e.keyCode === 13) {
      e.preventDefault();

      this.props.createNewComment({
        body: this.state.comment,
        track_id: this.props.track.id,
        user_id: this.props.artist.id,
      });
      this.props.fetchTracks();
      this.setState({ comment: "" });
    }
  }

  deleteComment(e, commentId) {
    e.preventDefault();
    this.props.destroyNewComment(commentId);
    this.props.fetchTracks();
  }

  findRelatedTrack(tracks, trackId) {
      for (let i = 0; i < tracks.length; i++) {
        const element = tracks[i];
          if(element.id !== trackId) {
            return element.id
          }
        
      }
  }

  render() {
    const { track, artist, playing, currentTrack, currentUser } = this.props;
    if (!track) return null;

    let likeButton = (
      <div className="track-show-like-button" onClick={this.likeTrack}>
        <img
          className="track-show-like-icon"
          src="/assets/heart.png"
          alt="heart"
        />
        <p>Like</p>
      </div>
    );
    for (let i = 0; i < track.likes.length; i++) {
      const like = track.likes[i];
      if (currentUser && like.user_id === currentUser.id) {
        likeButton = (
          <div
            className="track-show-liked-button"
            onClick={(e) => this.unlikeTrack(e, like.id)}
          >
            <img
              className="track-show-like-icon"
              src="/assets/heart-red"
              alt="red heart"
            />
            <p>Liked</p>
          </div>
        );
      }
    }

    let trackComments;
    if (track.comments.length === 0) {
      trackComments = (
        <div className="quiet-container">
          <img
            className="comment-icon-big"
            src="/assets/speech-bubble.png"
            alt="comment-icon"
          />
          <h1 className="quiet-header-1">Seems a little quiet over here</h1>
          <h1 className="quiet-header-2">Be the first to comment on this track</h1>
        </div>
      );
    } else {
      trackComments = track.comments.map((comment) => {
        const commentUser = this.props.users[comment.user_id];
        return (
          <div key={comment.id} className="comment-section">
            <div className="comment-section-content">
              <img
                className="comment-user-pic"
                src={commentUser.profilePhotoUrl}
                alt="user-pic"
              />
              <div className="comment-artist-info">
                <NavLink
                  to={`/users/${artist.id}`}
                  className="comment-username"
                >
                  {commentUser.username}
                </NavLink>
                <p className="comment-body">{comment.body}</p>
              </div>
            </div>
            <div className="comment-section-time">
              <p className="comment-uploaded-time">
                {formatUploadTime(comment.created_at)}
              </p>
            </div>
              {this.props.currentUser
            ? <div className="comment-trash-icon-container">
               <img
                className="comment-trash-icon"
                onClick={(e) => this.deleteComment(e, comment.id)}
                src="/assets/trash.png"
                alt="pencil"
              />
            </div>
              : null }
          </div>
        );
      });
    }

    let relatedTrack = this.props.tracks[0];
    const relatedTrackId = this.findRelatedTrack(artist.tracks, track.id);

    if(artist.tracks.length > 1) {
     for (let i = 0; i < this.props.tracks.length; i++) {
        const ele = this.props.tracks[i];
        if(ele.id === relatedTrackId) {
          relatedTrack = ele;
        }
        } 
      }
    
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
            <NavLink to={`/users/${artist.id}`} className="track-show-artist">
              {artist.username}
            </NavLink>
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
                  onKeyDown={this.createComment}
                  onChange={this.handleInput}
                  className="write-comment-input"
                  value={this.state.comment}
                  type="text"
                  placeholder="Write a comment"
                />
              </div>
              <div className="track-show-buttons-container">
                {likeButton}
                {this.props.currentUser ? (
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
                ) : null}
                {this.props.currentUser ? (
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
                ) : null}
              </div>
              <div className="track_info_and_comments_container">
                <div className="artist-info-and-picture">
                  <img
                    className="track-show-main-artist-pic"
                    src={artist.profilePhotoUrl}
                    alt="artist-pic"
                  />
                  <div className="artist-info">
                    <NavLink
                      to={`/users/${artist.id}`}
                      className="track-show-artist-name"
                    >
                      {artist.username}
                    </NavLink>
                  </div>
                </div>
                <div className="comments-container">
                  <div className="track-show-description-container">
                    <h2 className="track-show-description">
                      {track.description}
                    </h2>
                    <p className="track-show-track-genres">{`#${track.genre}`}</p>
                    {track.comments.length > 1 ? (
                      <p className="number-of-comments">
                        <img
                          className="comment-icon"
                          src="/assets/comment.png"
                          alt="comment-icon"
                        />
                        {track.comments.length} comments
                      </p>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  {trackComments}
                </div>
              </div>
            </div>
            <div className="track-show-related-tracks">
              <div className="related-tracks-header-container">
                <div className="related-track-header-and-icon">
                  <img
                    className="sound-bar-icon"
                    src="/assets/sound-bar.png"
                    alt="sound-bar"
                  />
                  <h1 className="related-tracks-header">Related tracks</h1>
                </div>
                <NavLink
                  to={`/users/${relatedTrack.artist.id}`}
                  className="view-all-header"
                >
                  View all
                </NavLink>
              </div>
              <div className="related-tracks-track">
                <img
                  className="related-tracks-album-pic"
                  src={relatedTrack.photoUrl}
                  alt="related-track-photo"
                />
                <div className="related-tracks-track-name-and-artist">
                  <NavLink
                    to={`/users/${relatedTrack.artist.id}`}
                    className="related-track-artist-name"
                  >
                    {relatedTrack.artist.username}
                  </NavLink>
                  <NavLink
                    to={`/users/${relatedTrack.artist.id}/${relatedTrack.id}`}
                    className="related-track-track-title"
                  >
                    {relatedTrack.title}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrackShow;
