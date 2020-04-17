# [SkyCloud](https://soundsky.herokuapp.com/#/)

# Site description
SkyCloud is a clone of the popular website [SoundCloud](https://soundcloud.com/) - a free music streaming and sharing platform. It allows users to upload their own tracks and view what other artists have uploaded.

# Technologies Used
- Ruby on Rails -- backend
- React -- Front-end user interface
- Redux -- State container for React 
- AJAX -- asynchronous front-end to back-end communication 
- Heroku -- domain hosting 
- AWS -- cloud storage
- PostgreSQL -- data storage

# Features

## 1. Audio-Streaming 

- This was a particularly challenging feature to implement because the HTML audio element is very limited by design. It only allows for very minimal manipulation of the controls. However they do provide a few methods which can be implemented outside of the audio element itself which I took advantage of. By keeping track of whether or not the track is playing in the global state, I was able to determine if a user should have access to play or pause functionality at any given point. I took advantage of the audio HTML's built in method of play() and pause() in order to allow users to manipulate the audio-player from any item, as well as any page that features tracks, and not just the audio container itself. 
- Another challenge was isolating a mapped items of tracks from my user profile to each have individual access to the audio-player to avoid issues like all track buttons flipping from play to pause whenever one is clicked. To solve this I stored the track that the player had loaded in the global state, as well as the individual track displayed on the page. By ensuring equality before action, I isolated the play and pause functionality to each item individually. 

### From the user show page

```Javascript 
    playTrack() {
        this.props.updatePlayerTrack(this.props.track)
        this.props.updatePlayerArtist(this.props.artist)
        this.props.playTrack()
    }

    pauseTrack() {
        this.props.pauseTrack();
    }

     <div className="play-pause-buttons-container">
    {
        playing && track.id === currentTrack.id ?
        <img onClick={() => this.pauseTrack()} className="pause-button" src="/assets/pause-button-2.png" alt="pause-button" />
        :
        <img onClick={() => this.playTrack()} className="play-button" src="/assets/play-button-2.png" alt="play-button" />
    }
</div>
```

### From audio component 

```Javascript 
componentDidUpdate() {
        const audio = document.getElementById("audio");
        if(audio) {
        audio.src = this.props.track.trackUrl
            if (this.props.playing) {
                audio.play();
            } else {
                audio.pause();
            }
        }
}
```

## 2. Ensuring attachments
- Create a new track or account is ensured to have default attachements if none are uploaded, in order to avoid having blank information on the website. User profile and cover picture default to avatars while track photos default to the user's profile picture. To solve this problem I had to combine methods for attachement blobs with custom validations on the Rails model side. 

### Tracks
```Ruby
has_one_attached :photo 
has_one_attached :audio 

before_create :ensure_audio
before_create :ensure_photo

   def ensure_audio
       errors[:audio] << "must be attached" unless self.audio.attached?
   end

   def ensure_photo
      if !self.photo.attached?
         file = open(self.artist.profile_picture.service_url) 
         self.photo.attach(io: file, filename: 'defualt_photo.jpg')
      end
   end
```
### Users

```Ruby
has_one_attached :profile_picture
has_one_attached :cover_picture 

before_create :set_default_profile_picture
before_create :set_default_cover_picture

def set_default_profile_picture 
    file = open('https://soundsky-avatars.s3.amazonaws.com/avatar.png')
    self.profile_picture.attach(io: file, filename: 'avatar.jpg')
end

def set_default_cover_picture 
    file = open('https://soundsky-avatars.s3.amazonaws.com/coverpicture.jpg')
    self.cover_picture.attach(io: file, filename: 'avatar.jpg')
end
```


# Future directions

- Audio waves for player
- Playlists
- Likes
- Comments