import * as TrackUtil from '../utils/track_util'; 

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";

export const receiveTracks = (tracks) => ({
    type: RECEIVE_TRACK,
    tracks
})

export const receiveTrack = (track) => ({
    type: RECEIVE_TRACK,
    track
})

export const removeTrack = (trackId) => ({
    type: REMOVE_TRACK,
    trackId
})

export const fetchTracks = (userId) => dispatch => (
    dispatch(TrackUtil.fetchTracks(userId))
    .then(tracks=> receiveTracks(tracks))
)

export const fetchTrack = (userId, trackId) => dispatch => (
    dispatch(TrackUtil.fetchTrack(userId,trackId))
        .then(track => receiveTracks(track))
)

export const createTrack = (userId, form_track) => dispatch => (
    dispatch(TrackUtil.createTrack(userId, form_track))
    .then(track => receiveTrack(track))
)
export const updateTrack = (userId, form_track) => dispatch => (
    dispatch(TrackUtil.updateTrack(userId, form_track))
        .then(track => receiveTrack(track))
)

export const deleteTrack = (userId, trackId) => dispatch => (
    dispatch(TrackUtil.deleteTrack(userId, trackId))
        .then(() => receiveTrack(trackId))
)

