import { NavLink } from 'react-router-dom'; 
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTracks(this.props.match.params.userId)
    }

    render() {
        return (
            <div>
                <h1>{this.props.artist.username}</h1>
                <h3>Recent</h3>
                <ul>
                    {this.props.tracks.map(track => (
                        <TrackIndexItem
                            artist = {this.props.artist}
                            track={track}
                            deleteTrack={this.props.deleteTrack}
                            editTrack = {this.props.editTrack}
                            currentUser = {this.props.currentUser}
                        />
                    ))}
                </ul>
                {/* <NavLink to="upload" className="user-show-upload">Upload</NavLink>    */}
            </div>
        )
    }
}

export default TrackIndex; 