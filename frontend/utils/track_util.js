export const fetchTracks = ()=> {
    return $.ajax({
        url: "/api/tracks"
    })
}

export const fetchTrack = trackId => (
    $.ajax({
        url: `/api/tracks/${trackId}`
    })
)

export const createTrack = track => {
    debugger 
   return( $.ajax({
        method: 'POST',
        url: `/api/tracks`,
        data: track,
        contentType: false,
        processData: false 
    }))
}

export const updateTrack = track => (
    $.ajax({
        method: 'PATCH',
        url: `/api/tracks/${track.id}`,
        data: { track }
    })
)

export const deleteTrack = trackId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/tracks/${trackId}`,
    })
)
