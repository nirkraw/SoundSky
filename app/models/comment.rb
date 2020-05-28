class Comment < ApplicationRecord

    validates :user_id, :track_id, :body, presence: true
    
    
    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :track,
    foreign_key: :track_id,
    class_name: :Track

    belongs_to :parent_comment,
    optional: true,
    foreign_key: :parent_comment_id,
    class_name: :Comment 

    has_many :child_comments,
    foreign_key: :parent_comment_id,
    class_name: :Comment
end
