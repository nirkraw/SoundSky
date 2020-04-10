json.extract! track, :id, :title, :description, :genre
json.trackUrl url_for(track.audio)
