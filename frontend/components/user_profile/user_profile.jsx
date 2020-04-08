import { NavLink } from 'react-router-dom'; 
import TrackShow from '../tracks/track_show';

class UserProfile extends React.Component {
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
                        <TrackShow 
                            track={track}
                            deleteTrack={this.props.deleteTrack}
                            editTrack = {this.props.editTrack}
                            fetchTrack = {this.props.fetchTrack}
                        />
                    ))}
                </ul>
                {/* <NavLink to="upload" className="user-show-upload">Upload</NavLink>    */}
            </div>
        )
    }
}

export default UserProfile; 