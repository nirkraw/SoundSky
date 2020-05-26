import React from 'react';
import formatUploadTime from "../../utils/time_format_util";

class TrackDelete extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete= this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchTracks()
        this.props.fetchUsers();
         this.props.changeTrack(false);
    }

    playTrack() {
        this.props.updatePlayerTrack(this.props.track)
        this.props.updatePlayerArtist(this.props.artist)
        this.props.playTrack()
         this.props.changeTrack(true);
    }

    pauseTrack() {
        this.props.pauseTrack();
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteTrack(this.props.track.id).then(this.props.closeModal())
    }

    render() { 
       const {track, playing, artist, currentTrack} = this.props
       return(
           <div className="delete-form-box">
            <div onClick={this.props.closeModal} className="close-x">X</div>
                <div className="track-index-item-container">
                    <img className="delete-track-image" src={track.photoUrl} alt="track_picture" />
                    <div className="play-pause-buttons-container">
                        {playing && track.id === currentTrack.id ?
                            <img onClick={() => this.pauseTrack()} className="pause-button" src="/assets/pause-button-2.png" alt="pause-button" />
                            :
                            <img onClick={() => this.playTrack()} className="play-button" src="/assets/play-button-2.png" alt="play-button" />
                        }
                    </div>
                    <div className="track-info-container">
                        <div className="track-info">
                            <p className="delete-track-artist-name">{artist.username}</p>
                            <p className="delete-track-title">{track.title}</p>
                        </div>
                        <div className="track-genre-time">
                            <p className="uploaded-time">{formatUploadTime(track.created_at)}</p>
                        </div>
                    </div>
                </div>
                <h3 className="delete-track-header">Permanently delete this track?</h3>
                <p className="delete-info">Removing this track is irreversible. You will lose all the plays, likes and comments for this track with no way to get them back.</p>
                <div className="delete-buttons">
                    <button className="delete-cancel-button" onClick={this.props.closeModal}>Cancel</button>
                    <button className="delete-forever-button" onClick={this.handleDelete}>Delete forever</button>
                </div>
                
        </div>
       )
    }
}

export default TrackDelete; 