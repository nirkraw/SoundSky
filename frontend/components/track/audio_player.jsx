import React from 'react';
import {NavLink} from 'react-router-dom';

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTracks();
        this.props.fetchUsers();
        const audio = document.getElementById("audio");
        if (audio) {
            audio.src = this.props.track.trackUrl
            audio.pause();
        }
    }

    componentDidUpdate() {
        const audio = document.getElementById("audio");
        if(audio) {
        audio.src = this.props.track.trackUrl
            if (this.props.playing) {
                audio.play();
            } else {
                audio.pause();
            }
        }
    }

    render() {
       const {track, artist} = this.props 
       if (!track || !artist) return null; 

       return( 
       <footer className ="audio-player-container">
            <div className ="audio-player">
                <audio id="audio" 
                    controls controlsList="nodownload">
                    <source type="audio/mp3" />
                </audio>
            </div>
            <div className="audio-player-info">
                <div className="audio-player-artist-pic">
                    <img className="audio-player-artist-pic-img"
                        src={this.props.artist.profilePhotoUrl}
                        alt="ArtistProfilePic" />
                </div>
                <div className = "audio-player-artist-info">
                       <NavLink to={`/users/${artist.id}`} className="audio-player-artist-name">{artist.username}</NavLink>   
                       <p className="audio-player-track-title">{track.title}</p>
                </div>
            </div>
       </footer>
       )
    }
}

export default AudioPlayer; 