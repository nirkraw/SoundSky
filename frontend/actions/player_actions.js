export const UPDATE_PLAYER_TRACK = "UPDATE_PLAYER_TRACK";
export const PLAY_TRACK = "PLAY_TRACK";
export const PAUSE_TRACK = "PAUSE_TRACK";
export const UPDATE_PLAYER_ARTIST = "UPDATE_PLAYER_ARTIST";

export const updatePlayerTrack = (track) => {
    return({
        type: UPDATE_PLAYER_TRACK,
        track
    })
}

export const updatePlayerArtist = (artist) => {
    debugger 
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
