import { NavLink } from 'react-router-dom'; 
import TrackIndexItemContainer from './track_index_item_container';
import React from 'react';

class TrackIndex extends React.Component {
    constructor(props) {
        super(props)
    } 

    componentDidMount() {
        this.props.fetchUserTracks(this.props.match.params.userId)
        this.props.closeModal()
        this.props.fetchAllUsers();
    }


    render() { 
        const {tracks, artist, currentUser} = this.props;
        if (!tracks || !artist) return null;

        const tracksMap = (
            this.props.tracks.map(track => (
                <TrackIndexItemContainer 
                    key={track.id}
                    artist={artist}
                    track={track}
                    tracks={tracks}
                />
            ))
        )
        return (
            <div>
                <div className="profile-header">
                    <img className="artist-cover-pic"
                        src={artist.coverPhotoUrl}
                        alt="ArtistCoverPic" />
                    <div className="profile-picture-and-name">
                        <img className="artist-profile-pic"
                            src={artist.profilePhotoUrl}
                            alt="ArtistProfilePic" />
                        <h1 className="profile-username">{artist.username}</h1>
                     </div>
                </div>
               
               <div className="recent-tracks"> 
                    <h3 className="recent-header">Recent</h3>
                    <div className="tracks">
                        <ul>{tracksMap}</ul>
                    </div>
                    {currentUser === artist ?
                    <div className="upload-container">
                        <p className="upload-phrase">More uploads means more listeners.</p>
                        <NavLink to="/upload" className="user-show-upload">Upload more</NavLink>   
                    </div>
                    :
                    <div className="upload-container"></div>
                    }
               </div>
            </div>
        )
    }
}

export default TrackIndex; 