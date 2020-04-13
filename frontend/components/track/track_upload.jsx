import React from 'react'

class TrackUpload extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            title: "",
            description: "",
            genre: "",
            photoFile: null,
            trackFile: null,
            artist_id: this.props.currentUser.id
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
       this.setState({trackFile: e.currentTarget.files[0]});
    }

    handlePhoto(e) {
        this.setState({ photoFile: e.currentTarget.files[0] });
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger 
        const formData = new FormData();
        formData.append('track[title]', this.state.title);
        formData.append('track[genre]', this.state.genre);
        formData.append('track[description]', this.state.description);
        formData.append('track[artist_id]', this.state.artist_id);
        formData.append('track[photo]', this.state.photoFile);
        formData.append('track[audio]', this.state.trackFile);
        this.props.createTrack(formData).then(this.props.closeModal);
    }
    
    render() {
        const genreSelector = (
            <select value = {this.state.genre} onChange={this.handleInput('genre')}>
                <option value="None">--None--</option>
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

        return(
            <div className="upload-form-container">
                <form
                 onSubmit={this.handleSubmit} 
                 className="upload-form-box">
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <div className="upload-form">
                        <h3>Basic Info</h3>
                        {/* {errorsLi} */}
                        <label>Upload track
                        <   input 
                            type="file" 
                            // value={this.state.trackFile}
                            onChange={this.handleTrack} />
                        </label>
                        <label>Upload photo
                        <   input
                                type="file"
                                // value={this.state.photoFile}
                                onChange={this.handlePhoto} />
                        </label>
                        <label>Title
                            <input type="text"
                                value={this.state.title}
                                placeholder="title"
                                onChange={this.handleInput('title')}
                                className="upload-input"
                            />
                        </label>
                        <label>Genre
                           {genreSelector}
                        </label>
                        <label>Description
                            <textarea 
                            value={this.state.description}
                            cols="30" rows="10" 
                            placeholder="Describe Your Track"
                            onChange= {this.handleInput("description")}
                            ></textarea>
                        </label>
                        <button className="upload-submit">Save</button>
    
                    </div>
                </form>
            </div>
        )
    }
}

export default TrackUpload; 