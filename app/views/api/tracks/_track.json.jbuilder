json.extract! track, :id, :title, :description, :genre, :created_at
json.trackUrl url_for(track.audio) if track.audio.attached?
json.photoUrl url_for(track.photo) if track.photo.attached?