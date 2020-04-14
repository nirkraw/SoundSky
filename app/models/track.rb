class Track < ApplicationRecord

validates :artist_id, :title, presence: true 

belongs_to :artist,
foreign_key: :artist_id,
class_name: :User

has_one_attached :photo 
has_one_attached :audio 

before_create :ensure_audio
before_create :ensure_photo

   def ensure_audio
      
       errors[:audio] << "must be attached" unless self.audio.attached?
   end

   def ensure_photo
      
      if !self.photo.attached?
         file = self.artist.profile_picture.blob 
         self.photo.attach(io: file, filename: 'defualt_track.jpg')
      end
   end
    
   def created_at
       attributes['created_at'].strftime("%m/%d/%Y")
   end

end
