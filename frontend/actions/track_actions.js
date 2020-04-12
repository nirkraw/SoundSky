import * as TrackUtil from '../utils/track_util'; 

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";

export const receiveTracks = (tracks) => {
    debugger
    return ({
        type: RECEIVE_TRACKS,
        tracks
    })   
}

export const receiveTrack = (track) => ({
    type: RECEIVE_TRACK,
    track
})

export const removeTrack = (trackId) => ({
    type: REMOVE_TRACK,
    trackId
})

export const fetchTracks = () => dispatch => (
    (TrackUtil.fetchTracks())
    .then(tracks=> {
        debugger 
       return dispatch(receiveTracks(tracks))
    }) 
)

export const fetchTrack = (userId, trackId) => dispatch => (
    TrackUtil.fetchTrack(userId,trackId))
    .then(track => dispatch(receiveTracks(track))
)

export const createTrack = (userId, form_track) => dispatch => (
    (TrackUtil.createTrack(userId, form_track))
    .then(track => dispatch(receiveTrack(track)))
)
export const updateTrack = (userId, form_track) => dispatch => (
    (TrackUtil.updateTrack(userId, form_track))
        .then(track => dispatch(receiveTrack(track)))
)

export const deleteTrack = (userId, trackId) => dispatch => (
    (TrackUtil.deleteTrack(userId, trackId))
        .then(() => dispatch(receiveTrack(trackId)))
)

