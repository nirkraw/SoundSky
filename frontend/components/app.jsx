import React from 'react';
import {HeaderContainer} from "../components/header/header_container";
import TrackIndexContainer from "./user_profile/track_index_container";
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import Modal from './modal/modal';
import {Switch, Route, NativeRouter} from 'react-router-dom'; 
import AudioPlayerContainer from "../components/track/audio_player_container";
import UploadButtonContainer from "../components/track/upload_button_container";
import SplashContainer from "../components/splash/splash_container";
import TrackShowContainer from "../components/track/track_show_container";

const App = () => {
  
    return(
    <div>
        <Modal />
            <HeaderContainer />
            <Switch>
                <Route exact path="/" component={SplashContainer} />
                <Route exact path="/users/:userId" component={TrackIndexContainer} />
                <Route exact path="/users/:userId/:trackId" component={TrackShowContainer} />
                <ProtectedRoute exact path="/upload" component={UploadButtonContainer} />
            </Switch>
        <AudioPlayerContainer />
    </div>
    )
};

export default App; 