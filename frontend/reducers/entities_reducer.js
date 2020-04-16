import { combineReducers } from "redux";
import tracksReducer from "./tracks_reducer";
import usersReducer from "./users_reducer";
import userTracksReducer from "./user_tracks_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    tracks: tracksReducer,
    userTracks: userTracksReducer
});

export default entitiesReducer;