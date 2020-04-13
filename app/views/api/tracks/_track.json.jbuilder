json.extract! track, :id, :title, :description, :genre
json.trackUrl url_for(track.audio)
json.photoUrl url_for(track.photo) if track.photo.attached?