import React from 'react';


class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="splash-container">
                <div className="top-banner"></div>
                <div className="splash-content-container">
                <h1>Hear what's trending for free in the SoundSky community</h1>
                </div>
            </div>
        )
    }
}

export default Splash;