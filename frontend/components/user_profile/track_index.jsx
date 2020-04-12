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
                <h1>{this.props.artist.username}</h1>
                <img className = "artist-profile-pic" 
                    src={this.props.artist.profilePhotoUrl} 
                    alt="ArtistProfilePic"/>
                <img className="artist-cover-pic"
                    src={this.props.artist.coverPhotoUrl}
                    alt="ArtistCoverPic" />
                <h3>Recent</h3>
                <ul>{tracksMap}</ul>
                {/* <NavLink to="upload" className="user-show-upload">Upload</NavLink>    */}
            </div>
        )
    }
}

export default TrackIndex; 