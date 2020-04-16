import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTracks();
        this.props.fetchUsers();
    }

    render() {
        const {allTracks, playingTrack, playing, artist} = this.props
        debugger 
        if(allTracks.length < 1) return null;
        if(!artist) return null; 
        return(
            <div className="splash-container">
                <div className="top-banner"></div>
                    <div className="splash-content-container">
                        <h1>Hear what's trending for free in the SoundSky community</h1>
                        <div className="track-rows-container">
                            <div className="track-row-container">
                                <img src={allTracks[0].photoUrl}/>
                                <img src={allTracks[1].photoUrl} />
                                <img src={allTracks[2].photoUrl} />
                                <img src={allTracks[3].photoUrl} />
                                <img src={allTracks[4].photoUrl} />
                                <img src={allTracks[5].photoUrl} />
                            </div>
                            <div className="track-row-container2">
                                <img src={allTracks[6].photoUrl} />
                                <img src={allTracks[7].photoUrl} />
                                <img src={allTracks[8].photoUrl} />
                                <img src={allTracks[9].photoUrl} />
                                <img src={allTracks[11].photoUrl} />
                                <img src={allTracks[13].photoUrl} />
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Splash;