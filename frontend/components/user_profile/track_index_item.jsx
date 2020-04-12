import React from 'react';

class TrackIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    playTrack() {
        this.props.updatePlayerTrack(this.props.track)
        document.getElementById("audio").play();
    }

    pauseTrack() {
        document.getElementById("audio").pause();
    }

    render() {
       const { track, artist, editTrack, deleteTrack, currentUser } = this.props 
       const trackInfo = ( 
           <div className = "track-info">
                <p>{artist.username}</p>
                <p>{track.title}</p>
                <p>{track.genre}</p>
               <button onClick={() => this.playTrack()}>Play</button>
               <button onClick={() => this.pauseTrack()}>Pause</button>  
           </div>
        )
        if (currentUser === artist) {
            return (
                <li>
                    {trackInfo}
                    <div>
                        <button onClick={() => editTrack(artist.id, track)}>Edit</button>
                        <button onClick={() => deleteTrack(artist.id, track.id)}>Delete</button>
                    </div>
                </li>
            )
        } else {
            return (
                <li>
                    {trackInfo} 
                </li>
            ) 
        }
    }
}

export default TrackIndexItem;