import * as TrackUtil from '../utils/track_util'; 

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";


export const receiveTracks = (tracks) => {
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


export const errorHandler = (errors) => ({
    type: RECEIVE_TRACK_ERRORS,
    errors
})

export const fetchTracks = () => dispatch => (
    (TrackUtil.fetchTracks())
    .then(tracks=> {
       return dispatch(receiveTracks(tracks))
    }) 
)

export const fetchTrack = (trackId) => dispatch => (
    TrackUtil.fetchTrack(trackId))
    .then(track => dispatch(receiveTracks(track))
)

export const createTrack = (form_track) => dispatch => (
    (TrackUtil.createTrack(form_track))
    .then(
        track => dispatch(receiveTrack(track)),
        errors => { 
           return dispatch(errorHandler(errors.responseJSON))
        }
    )
)

export const updateTrack = (form_track, trackId) => dispatch => (
    (TrackUtil.updateTrack(form_track, trackId))
    .then(
        track => dispatch(receiveTrack(track)),
        errors => dispatch(errorHandler(errors.responseJSON))
    )
)

export const deleteTrack = (trackId) => dispatch => {
    debugger 
    return((TrackUtil.deleteTrack(trackId))
        .then(() => dispatch(receiveTrack(trackId))))
}

