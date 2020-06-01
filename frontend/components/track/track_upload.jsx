import React from "react";
import { Redirect } from "react-router-dom";

class TrackUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      genre: "",
      photoFile: null,
      photoUrl: null,
      trackFile: null,
      trackUrl: null,
      artist_id: this.props.currentUser.id,
      submited: false,
      titleError: "",
      trackError: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTrack = this.handleTrack.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
  }

  handleInput(type) {
    return (e) => this.setState({ [type]: e.currentTarget.value });
  }

  handleTrack(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ trackFile: file, trackUrl: fileReader.result });
    };
    if (file) fileReader.readAsDataURL(file);
  }

  handlePhoto(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) fileReader.readAsDataURL(file);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.trackFile) {
      this.setState({ trackError: "Upload a track." });
    } else if (!this.state.title) {
      this.setState({ titleError: "Enter a title." });
    } else {
      const formData = new FormData();
      formData.append("track[title]", this.state.title);
      formData.append("track[genre]", this.state.genre);
      formData.append("track[description]", this.state.description);
      formData.append("track[artist_id]", this.state.artist_id);
      if (this.state.photoFile) {
        formData.append("track[photo]", this.state.photoFile);
      }
      if (this.state.trackFile) {
        formData.append("track[audio]", this.state.trackFile);
      }
      this.props.createTrack(formData).then(this.setState({ submited: true }));
    }
  }

  render() {
    if (this.state.submited) return <Redirect to={`users/${this.props.currentUser.id}`} />;

    const imagePreview = this.state.photoUrl ? (
      <img
        className="image-preview"
        src={this.state.photoUrl}
        alt="TrackPhoto"
      />
    ) : null;
    


    let trackPreview;
    if(this.state.trackUrl) { 
      trackPreview = <p className="track-preview">Track is ready to go!</p>
    } else {
      trackPreview = <p className="session-track-errors">{this.state.trackError}</p>
    }


    let imageText;
    if (imagePreview) {
        imageText = "Replace Image"
    } else {
      imageText = "Upload image"
    }

    let trackText;
    let trackClass;
    if (this.state.trackUrl) {
      trackText = "Replace track";
      trackClass = "replace-track";
    } else {
      trackText = "Upload track";
      trackClass = "upload-track";
    }

    const genreSelector = (
      <select
        value={this.state.genre}
        onChange={this.handleInput("genre")}
        className="genre-input"
      >
        <option value="None">None</option>
        <option value="Alternative Rock">Alternative Rock</option>
        <option value="Ambient">Ambient</option>
        <option value="Classical">Classical</option>
        <option value="Country">Country</option>
        <option value="Dance &amp; EDM">Dance &amp; EDM</option>
        <option value="Dancehall">Dancehall</option>
        <option value="DeepHouse">DeepHouse</option>
        <option value="Disco">Disco</option>
        <option value="Drum &amp; Bass">Drum &amp; Bass</option>
        <option value="Electronic">Electronic</option>
        <option value="Folk &amp; Singer-Songwriter">
          Folk &amp; Singer-Songwriter
        </option>
        <option value="Hip-Hop &amp; Rap">Hip-Hop &amp; Rap</option>
        <option value="House">House</option>
        <option value="Indie">Indie</option>
        <option value="Jazz &amp; Blues">Jazz &amp; Blues</option>
        <option value="Latin">Latin</option>
        <option value="Metal">Metal</option>
        <option value="Piano">Piano</option>
        <option value="Pop">Pop</option>
        <option value="RnB &amp; Soul">RnB &amp; Soul</option>
        <option value="Reggae">Reggae</option>
        <option value="Reggaeton">Reggaeton</option>
        <option value="Rock">Rock</option>
        <option value="Soundtrack">Soundtrack</option>
        <option value="Techno">Techno</option>
        <option value="Trance">Trance</option>
        <option value="Trap">Trap</option>
        <option value="Triphop">Triphop</option>
        <option value="World">World</option>
      </select>
    );

    return (
      <form className="upload-form-box">
        <div onClick={this.props.closeModal} className="close-x">
          X
        </div>
        <div className="div1">
          <h3>Basic info</h3>
        </div>
        <div className="div2">
          <div className="div2a">
            <div className="photo-container">
              {imagePreview}
              <label className="upload-image">
                <div className="upload-image-text-container">
                  <img
                    className="camera-icon"
                    src="/assets/camera.png"
                    alt="camera"
                  />
                  <p className="upload-image-text">{imageText}</p>
                </div>
                <input
                  className="photo-input"
                  type="file"
                  onChange={this.handlePhoto}
                />
              </label>
            </div>
            <label className={trackClass}>
              {trackText}
              <input
                className="track-input"
                type="file"
                onChange={this.handleTrack}
              />
            </label>
            {trackPreview}
          </div>
          <div className="div2b">
            <p className="session-title-errors">{this.state.titleError}</p>
            <label>
              Title<span className="orange"> *</span>
              <br />
              {!this.state.titleError ? (
                <input
                  type="text"
                  value={this.state.title}
                  placeholder="Name your track"
                  onChange={this.handleInput("title")}
                  className="title-input"
                />
              ) : (
                <input
                  type="text"
                  value={this.state.title}
                  placeholder="Name your track"
                  onChange={this.handleInput("title")}
                  className="title-input-error"
                />
              )}
            </label>
            <label>
              Genre
              <br />
              {genreSelector}
            </label>
            <label>
              Description
              <br />
              <textarea
                value={this.state.description}
                cols="5"
                rows="5"
                placeholder="Describe your track"
                onChange={this.handleInput("description")}
                className="description-input"
                spellCheck="true"
              ></textarea>
            </label>
          </div>
        </div>
        <div className="div3">
          <p className="required-fields">
            <span className="orange">* </span> Required fields
          </p>
          <button onClick={this.handleSubmit} className="upload-submit">
            Save
          </button>
        </div>
      </form>
    );
  }
}

export default TrackUpload;
