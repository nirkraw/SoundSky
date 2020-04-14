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
   return( $.ajax({
        method: 'POST',
        url: `/api/tracks`,
        data: track,
        contentType: false,
        processData: false 
    }))
}

export const updateTrack = (track, trackId) => {
    return($.ajax({
        method: 'PATCH',
        url: `/api/tracks/${trackId}`,
        data: track,
        contentType: false,
        processData: false 
    }))
}

export const deleteTrack = trackId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/tracks/${trackId}`,
    })
)
