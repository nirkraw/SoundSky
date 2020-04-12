import React from 'react';
import HeaderContainer from "./header/header_container";
import TrackIndexContainer from "./user_profile/track_index_container";
import { AuthRoute } from '../utils/route_util';
import Modal from './modal/modal';
import {Switch, Route} from 'react-router-dom'; 
import AudioPlayerContainer from "../components/track/audio_player_container"

const App = () => {
  
    return(
    <div>
     <Modal />
     <HeaderContainer />
            <Switch>
                <Route path="/users/:userId" component={TrackIndexContainer} />
            </Switch>
     <AudioPlayerContainer />

    </div>
    )
};

export default App; 