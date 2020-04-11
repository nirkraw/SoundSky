import React from 'react';

class TrackIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
       const { track, artist, editTrack, deleteTrack, currentUser } = this.props 
       const trackInfo = ( 
           <div className = "track-info">
                <p>{artist.username}</p>
                <p>{track.title}</p>
                <p>{track.genre}</p>
                <audio src={track.trackUrl}></audio>
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