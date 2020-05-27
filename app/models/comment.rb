class Comment < ApplicationRecord

    validates :user_id, :track_id, presence: true
    
    belongs_to :user,
    foreign_key: :user_id,
    class_name: :user

    belongs_to :track,
    foreign_key: :track_id,
    class_name: :track

    belongs_to :parent_comment,
    foreign_key: :parent_comment_id,
    class_name: :Comment 

    has_many :child_comments,
    foreign_key: :parent_comment_id,
    class_name: :Comment
end
