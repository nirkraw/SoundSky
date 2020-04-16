import { combineReducers } from 'redux';
import player from './player_reducer';

import modal from './modal_reducer.js';

export default combineReducers({
    modal,
    player
});
