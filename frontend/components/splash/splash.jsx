import React from 'react';
import HeaderContainer from "../header/header";

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <HeaderContainer />
                <h1>hello</h1>
            </div>
        )
    }
}

export default Splash;