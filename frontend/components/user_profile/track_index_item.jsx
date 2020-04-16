import React from 'react';
import {NavLink} from 'react-router-dom';
import formatUploadTime from "../../utils/time_format_util";
import WaveFormContainer from "../waveform/waveform_container";


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
       const { track, artist, currentUser, playing, currentTrack } = this.props 
       debugger
       return ( 
           <li className="track-index-with-buttons" key={this.props.key}> 
                <div className = "track-index-item-container">
                    <img className="track-image" src={track.photoUrl} alt="track_picture"/>
                    <div className="play-pause-buttons-container">
                        {playing && track.id === currentTrack.id ?
                            <img onClick={() => this.pauseTrack()} className="pause-button" src="/assets/pause-button-2.png" alt="pause-button" />
                            :
                            <img onClick={() => this.playTrack()} className="play-button" src="/assets/play-button-2.png" alt="play-button" />
                        }
                    </div>
                    <div className="track-info-container"> 
                            <div className ="track-info">
                                <NavLink to={`/users/${artist.id}`} className="track-artist-name">{artist.username}</NavLink>   
                                <p className="track-title">{track.title}</p>
                            </div>
                            {/* <WaveFormContainer track={track}/> */}
                            <div className="track-genre-time">
                                <p className="uploaded-time">{formatUploadTime(track.created_at)}</p>
                                {track.genre ?
                                <p className="track-genre">{`#${track.genre}`}</p>
                                :
                               <p></p>
                                }
                            </div>
                    </div>
                </div>
                {currentUser === artist ?
                <div className="edit-delete-buttons-container"> 
                       <div className="edit-button" onClick={() => this.props.openModal('edit', track.id)}>
                        <img className="pencil-icon" src="/assets/pencil.png" alt="pencil" />
                        <p>Edit</p>
                    </div>
                       <div className="delete-button" onClick={() => this.props.openModal('delete', track.id, artist.id)}>
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