export const fetchTracks = ()=> {
    return $.ajax({
        url: `/api/tracks`
    })
}

export const fetchTrack = (userId, trackId) => (
    $.ajax({
        url: `/api/users/${userId}/tracks/${trackId}`
    })
)

export const createTrack = (userId, track) => (
    $.ajax({
        method: 'POST',
        url: `/api/users/${userId}/tracks`,
        data: {track}
    })
)

export const updateTrack = (userId, track) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${userId}/tracks/${track.id}`,
        data: { track }
    })
)

export const deleteTrack = (userId, trackId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/users/${userId}/tracks/${trackId}`,
    })
)
