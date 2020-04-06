import GreetingContainer from "./greeting/greeting_container";
import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute } from '../utils/route_util';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <header>
            <h1>SoundSky</h1>
            <GreetingContainer />
        </header>
        {/* <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    </div>
);

export default App; 