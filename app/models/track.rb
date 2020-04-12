class Track < ApplicationRecord

validates :artist_id, :title, presence: true 

# before_create :ensure_audio_attached

# def ensure_audio_attached
#     errors.add("Track must be attached") unless self.audio.attached? 
# end

belongs_to :artist,
foreign_key: :artist_id,
class_name: :User

has_one_attached :photo 
has_one_attached :audio 
# before_create :set_default_track_photo

#    def set_default_track_photo 
#         file = track.artist.profile_picture  
#         self.photo.attach(io: file, filename: 'track_photo.jpg')
#     end

end
