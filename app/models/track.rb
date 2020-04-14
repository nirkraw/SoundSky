class Track < ApplicationRecord

belongs_to :artist,
foreign_key: :artist_id,
class_name: :User

has_one_attached :photo 
has_one_attached :audio 

    
   def created_at
        attributes['created_at'].strftime("%m/%d/%Y")
   end

end
