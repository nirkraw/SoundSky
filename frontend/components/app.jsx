import React from 'react';
import HeaderContainer from "../components/header/header_container";
import TrackIndexContainer from "./user_profile/track_index_container";
import { AuthRoute } from '../utils/route_util';
import Modal from './modal/modal';
import {Switch, Route} from 'react-router-dom'; 
import AudioPlayerContainer from "../components/track/audio_player_container";
import TrackUploadContainer from "../components/track/track_upload_container";
import Splash from "../components/splash/splash";

const App = () => {
  
    return(
    <div>
        <Modal />
            <HeaderContainer />
            <Switch>
                <Route exact path="/" component={Splash} />
                <Route exact path="/users/:userId" component={TrackIndexContainer} />
                <Route exact path="/upload" component={TrackUploadContainer} />
            </Switch>
        <AudioPlayerContainer />
    </div>
    )
};

export default App; 