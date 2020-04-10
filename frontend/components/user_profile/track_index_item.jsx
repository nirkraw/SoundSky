import React from 'react';

class TrackIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        debugger
       const { track, artist, editTrack, deleteTrack } = this.props 
       const trackInfo = ( 
           <div className = "track-info">
                <p>{artist.username}</p>
                <p>{track.title}</p>
                <p>{track.genre}</p>
           </div>
        )
        if (this.props.currentUser.id = artist.id) {
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