import { NavLink } from 'react-router-dom'; 
import TrackIndexItemContainer from './track_index_item_container';
import React from 'react';

class TrackIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTracks();
        this.props.fetchAllUsers();
    }

    render() { 
        if (!this.props.artist) return null;
        if (!this.props.tracks) return null;

        const tracksMap = (
            this.props.tracks.map(track => (
                <TrackIndexItemContainer 
                    key ={track.id}
                    artist={this.props.artist}
                    track={track}
                />
            ))
        )
        return (
            <div>
                <div className="profile-header">
                    <img className="artist-cover-pic"
                        src={this.props.artist.coverPhotoUrl}
                        alt="ArtistCoverPic" />
                    <div className="profile-picture-and-name">
                        <img className="artist-profile-pic"
                            src={this.props.artist.profilePhotoUrl}
                            alt="ArtistProfilePic" />
                        <h1 className="profile-username">{this.props.artist.username}</h1>
                     </div>
                </div>
               
               <div className="recent-tracks"> 
                    <h3 className="recent-header">Recent</h3>
                    <div className="tracks">
                        <ul>{tracksMap}</ul>
                    </div>
                    <div className="upload-container">
                        <p className="upload-phrase">More uploads means more listeners.</p>
                        <NavLink to="/upload" className="user-show-upload">Upload more</NavLink>   
                    </div>
               </div>
            </div>
        )
    }
}

export default TrackIndex; 