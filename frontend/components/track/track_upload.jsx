import React from 'react'
import { Redirect } from 'react-router-dom';

class TrackUpload extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            title: "",
            description: "",
            genre: "",
            photoFile: null,
            photoUrl: null,
            trackFile: null,
            trackUrl: null,
            artist_id: this.props.currentUser.id,
            submited: false
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTrack = this.handleTrack.bind(this);
        this.handlePhoto = this.handlePhoto.bind(this);
        
    }

    handleInput(type) {
        return e => this.setState({ [type]: e.currentTarget.value })
    }

    handleTrack(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({trackFile: file, trackUrl: fileReader.result });
        }
        if (file) fileReader.readAsDataURL(file);
    }

    handlePhoto(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        }
        if(file) fileReader.readAsDataURL(file);
    }   
   
    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('track[title]', this.state.title);
        formData.append('track[genre]', this.state.genre);
        formData.append('track[description]', this.state.description);
        formData.append('track[artist_id]', this.state.artist_id);
        if (this.state.photoFile) {
            formData.append('track[photo]', this.state.photoFile);
        }
        if (this.state.trackFile) {
            formData.append('track[audio]', this.state.trackFile);
        }
        this.props.createTrack(formData).then(this.setState({ submited: true }))
    }

    render() {
        if(this.state.submited) return(<Redirect to={`users/${currentUser.id}`}/>)
       
        const imagePreview = this.state.photoUrl ? <img className="image-preview" src={this.state.photoUrl} alt="TrackPhoto" /> : null;
        const trackPreview = this.state.trackUrl ? <p className="track-preview">Track is ready to go!</p>: null; 
        
        let imageText;
        let imageClass;
        if(imagePreview) {
            imageText = "Replace image";
            imageClass= "replace-image"
        } else {
            imageText = "Upload image";
            imageClass = "upload-image"
        }

        let trackText;
        let trackClass;
        if (trackPreview) {
            trackText = "Replace track";
            trackClass = "replace-track"
        } else {
            trackText = "Upload track";
            trackClass = "upload-track"
        }

        const genreSelector = (
            <select 
            value = {this.state.genre} 
            onChange={this.handleInput('genre')}
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
                <option value="Folk &amp; Singer-Songwriter">Folk &amp; Singer-Songwriter</option>
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
        )

        const errorsLi = this.props.errors.map(
            error => <li
                className="session-errors"
                key={error}
            >{error}</li>
        )



        return(
                <form onSubmit={this.handleSubmit} className="upload-form-box">
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                        <div className="div1">
                            {errorsLi}
                            <h3>Basic info</h3>
                        </div>
                        <div className="div2">
                            <div className ="div2a">
                                <div className="photo-container">
                                    {imagePreview}
                                     <label className={imageClass}>{imageText}
                                        <   input
                                                className="photo-input"
                                                type="file"
                                                onChange={this.handlePhoto} />
                                        </label>
                                </div>
                                <label className={trackClass}>{trackText} 
                                <   input
                                    className="track-input"
                                    type="file" 
                                    onChange={this.handleTrack} />
                                </label>
                                    {trackPreview}
                            </div>
                            <div className="div2b">
                        <label>Title<span className="orange"> *</span>
                                    <br/>
                                    <input type="text"
                                        value={this.state.title}
                                        placeholder="Name your track"
                                        onChange={this.handleInput('title')}
                                        className="title-input"
                                    />
                                </label>
                                <label>Genre
                                    <br/>
                                {genreSelector}
                                </label>
                                <label>Description
                                    <br/>
                                    <textarea 
                                    value={this.state.description}
                                    cols="5" rows="5" 
                                    placeholder="Describe your track"
                                    onChange= {this.handleInput("description")}
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

export default TrackUpload; 