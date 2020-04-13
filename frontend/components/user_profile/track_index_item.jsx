import React from 'react';
import {NavLink} from 'react-router-dom';

class TrackIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    playTrack() {
        this.props.updatePlayerTrack(this.props.track)
        this.props.updatePlayerArtist(this.props.artist)
        this.props.playTrack()
        
    }

    pauseTrack() {
        this.props.pauseTrack();
    }

    render() {
       const { track, artist, editTrack, deleteTrack, currentUser, playing, currentTrack } = this.props 
       return ( 
           <li className="track-index-with-buttons"> 
                <div className = "track-index-item-container">
                    <img className="track-image" src={track.photoUrl} alt="track_picture"/>
                    <div className="play-pause-buttons-container">
                        {playing && track.id === currentTrack.id ?
                            <img onClick={() => this.pauseTrack()} className="pause-button" src="/assets/pause-button.png" alt="pause-button" />
                            :
                            <img onClick={() => this.playTrack()} className="play-button" src="/assets/play-button.png" alt="play-button" />
                        }
                    </div>
                    <div className="track-info-container"> 
                            <div className ="track-info">
                                <NavLink to={`/users/${artist.id}`} className="track-artist-name">{artist.username}</NavLink>   
                                <p className="track-title">{track.title}</p>
                            </div>
                            <div className="track-genre">
                                <p>#{track.genre}</p>
                            </div>
                    </div>
                </div>
                {currentUser === artist ?
                <div className="edit-delete-buttons-container"> 
                    <div className="edit-button" onClick={() => editTrack(artist.id, track)}>
                        <img className="pencil-icon" src="/assets/pencil.png" alt="pencil" />
                        <p>Edit</p>
                    </div>
                       <div className="delete-button" onClick={() => deleteTrack(artist.id, track.id)}>
                           <img className="trash-icon" src="/assets/trash.png" alt="pencil" />
                           <p>Delete</p>
                    </div>
                </div>
                :
                <div className="edit-delete-buttons-container"></div> 
                }
            </li>
        )
    }
}

export default TrackIndexItem;