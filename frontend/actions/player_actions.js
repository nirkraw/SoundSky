export const UPDATE_PLAYER_TRACK = "UPDATE_PLAYER_TRACK";
export const PLAY_TRACK = "PLAY_TRACK";
export const PAUSE_TRACK = "PAUSE_TRACK";
export const UPDATE_PLAYER_ARTIST = "UPDATE_PLAYER_ARTIST";
export const CHANGE_TRACK = 'CHANGE_TRACK'
export const CHANGE_TRACK_TIME = "CHANGE_TRACK_TIME";

export const updatePlayerTrack = (track) => {
    return({
        type: UPDATE_PLAYER_TRACK,
        track
    })
}

export const updatePlayerArtist = (artist) => {
    return({
        type: UPDATE_PLAYER_ARTIST,
        artist 
    })
}

export const playTrack = () => ({
    type: PLAY_TRACK
})

export const pauseTrack = () => ({
    type: PAUSE_TRACK
})

export const changeTrack = (boolean) => ({
  type: CHANGE_TRACK,
  changeTrack: boolean
});

export const changeTrackTime = (time) => ({
  type: CHANGE_TRACK_TIME,
  time: time
});
