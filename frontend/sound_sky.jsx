import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import {fetchUsers, fetchUser} from "./utils/user_util";
import {fetchTracks} from "./utils/track_util";


//TEST
window.fetchUsers = fetchUsers;
window.fetchTracks = fetchTracks;
window.fetchUser = fetchUser;
//TEST

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = { session: { currentUser: window.currentUser } };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});