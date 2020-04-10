json.extract! user, :id, :username
json.profilePhotoUrl url_for(user.profile_picture)
json.coverPhotoUrl url_for(user.cover_picture)
