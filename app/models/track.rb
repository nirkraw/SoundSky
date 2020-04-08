class Track < ApplicationRecord

validates :artist_id, :title, presence: true 

belongs_to :artist,
foreign_key: :artist_id,
class_name: :User

end
