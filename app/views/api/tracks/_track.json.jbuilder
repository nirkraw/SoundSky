json.extract! track, :id, :title, :description, :genre, :artist_id, :created_at if(track)
json.trackUrl url_for(track.audio) if track.audio.attached?
json.photoUrl url_for(track.photo) if track.photo.attached?