import React from 'react'

class TrackEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.track.title,
            description: this.props.track.description,
            genre: this.props.track.genre,
            trackUrl: this.props.track.trackUrl,
            photoUrl: this.props.track.photoUrl,
            artist_id: this.props.currentUser.id,
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePhoto = this.handlePhoto.bind(this);

    }

    componentDidMount() {
        this.props.fetchTracks()
    }

    handleInput(type) {
        return e => this.setState({ [type]: e.currentTarget.value })
    }


    handlePhoto(e) {
        this.setState({ photoFile: e.currentTarget.files[0] });
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('track[title]', this.state.title);
        formData.append('track[genre]', this.state.genre);
        formData.append('track[description]', this.state.description);
        formData.append('track[artist_id]', this.state.artist_id);
        if(this.state.photoUrl) {
            formData.append('track[photo]', this.state.photoUrl);
        }
        formData.append('track[audio]', this.state.trackUrl);
        this.props.updateTrack(formData, this.props.track.id)
    }

    render() {
        const preview = this.state.photoUrl ? <img className="image-preview" src={this.state.photoUrl} alt="TrackPhoto" /> : null;

        let buttonText;
        let buttonClass;
        if (preview) {
            buttonText = "Replace image";
            buttonClass = "replace-image"
        } else {
            buttonText = "Upload image";
            buttonClass = "upload-image"
        }

        if(!this.props.track) return null; 
        const genreSelector = (
            <select
                value={this.state.genre}
                onChange={this.handleInput('genre')}
                className="genre-input"
            >
                <option value="None">None</option>
                <option value="Alternative Rock">Alternative Rock</option>
                <option value="Ambient">Ambient</option>
                <option value="Classical">Classical</option>
                <option value="Country">Country</option>
                <option value="Dance and EDM">Dance EDM</option>
                <option value="Dancehall">Dancehall</option>
                <option value="DeepHouse">DeepHouse</option>
                <option value="Disco">Disco</option>
                <option value="Drum and Bass">Drum and Bass</option>
                <option value="Electronic">Electronic</option>
                <option value="Folk and Singer-Songwriter">Folk and Singer-Songwriter</option>
                <option value="Hip-Hop and Rap">Hip-Hop and Rap</option>
                <option value="House">House</option>
                <option value="Indie">Indie</option>
                <option value="Jazz and Blues">Jazz and Blues</option>
                <option value="Latin">Latin</option>
                <option value="Metal">Metal</option>
                <option value="Piano">Piano</option>
                <option value="Pop">Pop</option>
                <option value="RnB and Soul">RnB and Soul</option>
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
        )

        const errorsLi = this.props.errors.map(
            error => <li
                className="session-errors"
                key={error}
            >{error}</li>
        )

        return (
            <form onSubmit={this.handleSubmit} className="upload-form-box">
                <div onClick={this.props.closeModal} className="close-x">X</div>
                <div className="div1">
                    <h3>Basic info</h3>
                    {errorsLi}
                </div>
                <div className="div2">
                    <div className="div2a">
                        <div className="photo-container">
                            {preview}
                            <label className={buttonClass}>{buttonText}
                                <input
                                className="photo-input"
                                type="file"
                                onChange={this.handlePhoto} />
                             </label>
                        </div>
                    </div>
                    <div className="div2b">
                        <label>Title<span className="orange"> *</span>
                                    <br />
                            <input type="text"
                                value={this.state.title}
                                onChange={this.handleInput('title')}
                                className="title-input"
                            />
                        </label>
                        <label>Genre
                                    <br />
                            {genreSelector}
                        </label>
                        <label>Description
                                    <br />
                            <textarea
                                value={this.state.description}
                                cols="5" rows="5"
                                onChange={this.handleInput("description")}
                                className="description-input"
                                spellCheck="true"
                            ></textarea>
                        </label>
                    </div>
                </div>
                <div className="div3">
                    <p className="required-fields"><span className="orange">* </span> Required fields</p>
                    <button className="upload-submit">Save</button>
                </div>
            </form>
        )
    }
}

export default TrackEdit; 