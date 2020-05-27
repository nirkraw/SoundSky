class User < ApplicationRecord

validates :password_digest, :session_token, presence: true
validates :username, :session_token, uniqueness: true
validates :password, length: {minimum: 6 }, allow_nil: true
after_initialize :ensure_session_token
attr_reader :password

has_many :tracks,
foreign_key: :artist_id,
class_name: :Track

has_many :likes,
foreign_key: :user_id,
class_name: :Like

has_many :comments,
foreign_key: :user_id,
class_name: :Comment 

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

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user && user.is_password?(password)
        user 
    end

    def is_password?(password)
        bcrypy_password = BCrypt::Password.new(self.password_digest)
        bcrypy_password.is_password?(password)
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)    
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.update!(session_token: User.generate_session_token)
        self.session_token
    end

end