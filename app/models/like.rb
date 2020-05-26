class Like < ApplicationRecord

validates :user_id, :track_id, uniqueness: true

belongs_to :user,
foreign_key: :user_id,
class_name: :User  

belongs_to :track,
foreign_key: :track_id,
class_name: :Track

end
