# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all 
demo_user = User.create!(id: 14, username: "Nir Kay", password_digest: "$2a$12$tmRCrkwYbQn5Fvqouu5vFuAGDZHv7eatIREXENEO1a5A746.iHp6.")
    pro_pic = open('https://soundsky-photos.s3.amazonaws.com/Nir+sitting+piano-edited.jpg')
    cov_pic = open("https://soundsky-photos.s3.amazonaws.com/longpianoshot-edited.jpeg")
    demo_user.profile_picture.attach(io: pro_pic, filename: 'profile-avatar.jpg')
    demo_user.cover_picture.attach(io: cov_pic, filename: 'cover-avatar.jpg') 

michael_jackson = User.create!(id: 15, username: "Michael Jackson", password_digest: "$2a$12$tmRCrkwYbQn5Fvqouu5vFuAGDZHv7eatIREXENEO1a5A746.iHp6.")
    michael_jackson.profile_picture.attach(io: open("https://soundsky-photos.s3.amazonaws.com/Number+Ones.jpg"), filename: 'profile-avatar.jpg')
    # michael_jackson.cover_picture.attach(io: open(""), filename: 'cover-avatar.jpg') 

ac_dc = User.create!(id: 16, username: "AC/DC", password_digest: "$2a$12$tmRCrkwYbQn5Fvqouu5vFuAGDZHv7eatIREXENEO1a5A746.iHp6.")
    ac_dc.profile_picture.attach(io: open("https://soundsky-photos.s3.amazonaws.com/Highway+To+Hell.png"), filename: 'profile-avatar.jpg')
    # ac_dc.cover_picture.attach(io: open(""), filename: 'cover-avatar.jpg') 

adele = User.create!(id: 17, username: "Adele", password_digest: "$2a$12$tmRCrkwYbQn5Fvqouu5vFuAGDZHv7eatIREXENEO1a5A746.iHp6.")
    adele.profile_picture.attach(io: open("https://soundsky-photos.s3.amazonaws.com/21.png"), filename: 'profile-avatar.jpg')
    # adele.cover_picture.attach(io: open(""), filename: 'cover-avatar.jpg') 

maroon5 = User.create!(id: 18, username: "Maroon5", password_digest: "$2a$12$tmRCrkwYbQn5Fvqouu5vFuAGDZHv7eatIREXENEO1a5A746.iHp6.")
    maroon5.profile_picture.attach(io: open("https://soundsky-photos.s3.amazonaws.com/Songs+About+Jane.jpg"), filename: 'profile-avatar.jpg')
    # maroon5.cover_picture.attach(io: open(""), filename: 'cover-avatar.jpg') 

lake_street_div = User.create!(id: 19, username: "Lake Street Dive", password_digest: "$2a$12$tmRCrkwYbQn5Fvqouu5vFuAGDZHv7eatIREXENEO1a5A746.iHp6.")
    lake_street_div.profile_picture.attach(io: open("https://soundsky-photos.s3.amazonaws.com/Bad+Self+Portraits.png"), filename: 'profile-avatar.jpg')
    # lake_street_div.cover_picture.attach(io: open(""), filename: 'cover-avatar.jpg') 

martin_sexton = User.create!(id: 20, username: "Martin Sexton", password_digest: "$2a$12$tmRCrkwYbQn5Fvqouu5vFuAGDZHv7eatIREXENEO1a5A746.iHp6.")
    martin_sexton.profile_picture.attach(io: open("https://soundsky-photos.s3.amazonaws.com/Purple+Rain.jpg"), filename: 'profile-avatar.jpg')
    # martin_sexton.cover_picture.attach(io: open(""), filename: 'cover-avatar.jpg') 

the_animals = User.create!(id: 21, username: "The Animals", password_digest: "$2a$12$tmRCrkwYbQn5Fvqouu5vFuAGDZHv7eatIREXENEO1a5A746.iHp6.")
    the_animals.profile_picture.attach(io: open("https://soundsky-photos.s3.amazonaws.com/The+Best+of+The+Animals.png"), filename: 'profile-avatar.jpg')
    # the_animals.cover_picture.attach(io: open(""), filename: 'cover-avatar.jpg') 

tom_petty = User.create!(id: 22, username: "Tom Petty", password_digest: "$2a$12$tmRCrkwYbQn5Fvqouu5vFuAGDZHv7eatIREXENEO1a5A746.iHp6.")
    tom_petty.profile_picture.attach(io: open("https://soundsky-photos.s3.amazonaws.com/Tom+Petty+%26+The+Heartbreakers.jpg"), filename: 'profile-avatar.jpg')
    # tom_petty.cover_picture.attach(io: open(""), filename: 'cover-avatar.jpg') 





Track.delete_all
talk_at_all = Track.create!(id: 4, title: "Talk At All", genre: "Pop", artist_id: 14)
    talk_at_all_audio = open("https://soundsky-audio.s3.amazonaws.com/TalkAtAll.mp3")
    talk_at_all.audio.attach(io: talk_at_all_audio, filename: "Talk_At_All.mp3")
    talk_at_all_photo = open("https://soundsky-photos.s3.amazonaws.com/CanYouLoveCover.jpg")
    talk_at_all.photo.attach(io: talk_at_all_photo, filename: "Talk_At_All_Cover")


same_insane_love = Track.create!(id: 5, title: "Same Insane Love", genre: "Pop", artist_id: 14)
    same_insane_love_audio = open("https://soundsky-audio.s3.amazonaws.com/SameInsaneLove.mp3")
    same_insane_love.audio.attach(io: same_insane_love_audio, filename: "Same_Insane_Love.mp3")
    same_insane_love_photo = open("https://soundsky-photos.s3.amazonaws.com/ISawItComingAlbum.jpg")
    same_insane_love.photo.attach(io: same_insane_love_photo, filename: "Same_Insane_Love_Cover")

i_saw_it_coming = Track.create!(id: 6, title: "I Saw It Coming", genre: "Pop", artist_id: 14)
    i_saw_it_coming_audio = open("https://soundsky-audio.s3.amazonaws.com/I+Saw+It+Coming.mp3")
    i_saw_it_coming.audio.attach(io: i_saw_it_coming_audio, filename: "I_Saw_It_Coming.mp3")
    i_saw_it_coming_photo = open("https://soundsky-photos.s3.amazonaws.com/I+Saw+it+Coming+Cover(Single).jpg")
    i_saw_it_coming.photo.attach(io: i_saw_it_coming_photo, filename: "I_Saw_It_Coming_Cover")

american_girl = Track.create!(id: 7, title: "American Girl", genre: "Rock", artist_id: 22)
    american_girl.audio.attach(io: open("https://soundsky-audio.s3.amazonaws.com/01+American+Girl.mp3"), filename: "american_girl_audio")
    # american_girl.photo.attach(io: open(""), filename: "american_girl_photo")

house_of_the_rising_sun = Track.create!(id: 8, title: "House of the Rising Sun", genre: "Rock", artist_id: 21)
    house_of_the_rising_sun.audio.attach(io: open("https://soundsky-audio.s3.amazonaws.com/32+House+of+the+Rising+Sun.mp3"), filename: "house_of_the_rising_sun_audio")
    # house_of_the_rising_sun.photo.attach(io: open(""), filename: "house_of_the_rising_sun_photo")

purple_rain = Track.create!(id: 9, title: "Purple Rain", genre: "Folk", artist_id: 20)
    purple_rain.audio.attach(io: open("https://soundsky-audio.s3.amazonaws.com/Purple+Rain.mp3"), filename: "purple_rain_audio")
    # purple_rain.photo.attach(io: open(""), filename: "purple_rain_photo")

you_go_down_smooth = Track.create!(id: 10, title: "You Go Down Smooth", genre: "Rock", artist_id: 19)
    you_go_down_smooth.audio.attach(io: open("https://soundsky-audio.s3.amazonaws.com/05+You+Go+Down+Smooth.mp3"), filename: "you_go_down_smooth_audio")
    # you_go_down_smooth.photo.attach(io: open(""), filename: "you_go_down_smooth_photo")

seventeen = Track.create!(id: 11, title: "Seventeen", genre: "Rock", artist_id: 19)
    seventeen.audio.attach(io: open("https://soundsky-audio.s3.amazonaws.com/09+Seventeen.mp3"), filename: "seventeen_audio")
    # seventeen.photo.attach(io: open(""), filename: "seventeen_photo")

stop_your_crying = Track.create!(id: 12, title: "Stop Your Crying", genre: "Rock", artist_id: 19)
    stop_your_crying.audio.attach(io: open("https://soundsky-audio.s3.amazonaws.com/02+Stop+Your+Crying.mp3"), filename: "stop_your_crying_audio")
    # stop_your_crying.photo.attach(io: open(""), filename: "stop_your_crying_photo")

she_will_be_loved = Track.create!(id: 13, title: "She Will Be Loved", genre: "Pop", artist_id: 18)
    she_will_be_loved.audio.attach(io: open("https://soundsky-audio.s3.amazonaws.com/04+She+Will+Be+Loved.m4a"), filename: "she_will_be_loved_audio")
    # she_will_be_loved.photo.attach(io: open(""), filename: "she_will_be_loved_photo")

hard_to_breathe = Track.create!(id: 14, title: "Hard To Breathe", genre: "Pop", artist_id: 18)
    hard_to_breathe.audio.attach(io: open("https://soundsky-audio.s3.amazonaws.com/01+Harder+To+Breathe.m4a"), filename: "hard_to_breathe_audio")
    # hard_to_breathe.photo.attach(io: open(""), filename: "hard_to_breathe_photo")

the_sun = Track.create!(id: 15, title: "The Sun", genre: "Pop", artist_id: 18)
    the_sun.audio.attach(io: open("https://soundsky-audio.s3.amazonaws.com/06+The+Sun.m4a"), filename: "the_sun_audio")
    # the_sun.photo.attach(io: open(""), filename: "the_sun_photo")

sunday_morning = Track.create!(id: 16, title: "Sunday morning", genre: "Pop", artist_id: 18)
    sunday_morning.audio.attach(io: open("https://soundsky-audio.s3.amazonaws.com/06+The+Sun.m4a"), filename: "sunday_morning_audio")
    # sunday_morning.photo.attach(io: open(""), filename: "sunday_morning_photo")

rolling_in_the_deep = Track.create!(id: 17, title: "Rolling In The Deep", genre: "Pop", artist_id: 17)
    rolling_in_the_deep.audio.attach(io: open("https://soundsky-audio.s3.amazonaws.com/01+Harder+To+Breathe.m4a"), filename: "rolling_in_the_deep_audio")
    # rolling_in_the_deep.photo.attach(io: open(""), filename: "rolling_in_the_deep_photo")

touch_too_much = Track.create!(id: 18, title: "Touch Too Much", genre: "Rock", artist_id: 16)
    touch_too_much.audio.attach(io: open("https://soundsky-audio.s3.amazonaws.com/04+Touch+Too+Much.mp3"), filename: "touch_too_much_audio")
    # touch_too_much.photo.attach(io: open(""), filename: "touch_too_much_photo")

love_never_felt_so_good = Track.create!(id: 19, title: "Love Never Felt So Good", genre: "Pop", artist_id: 15)
    love_never_felt_so_good.audio.attach(io: open("https://soundsky-audio.s3.amazonaws.com/Love+Never+Felt+So+Good.mp3"), filename: "love_never_felt_so_good_audio")
    # love_never_felt_so_good.photo.attach(io: open(""), filename: "love_never_felt_so_good_photo")

Comment.delete_all    

Comment.create!(body: "Yo this is a sick track! def post more tunes", user_id: 15, track_id: 4);
Like.create!(user_id: 15, track_id: 4);
Comment.create!(body: "The chorus oh man chills everytime", user_id: 16, track_id: 4);
Like.create!(user_id: 16, track_id: 4);
Comment.create!(body: "Dig this", user_id: 17, track_id: 4);
Like.create!(user_id: 17, track_id: 4);


Comment.create!(body: "dopeeeeeeeeee", user_id: 18, track_id: 5);
Like.create!(user_id: 18, track_id: 5);
Comment.create!(body: "check out my new single i think you're gonna like", user_id: 19, track_id: 5);
Like.create!(user_id: 19, track_id: 5);


Comment.create!(body: "production is awesome and the vocals hit the spot", user_id: 20, track_id: 6);
Like.create!(user_id: 20, track_id: 6);


Comment.create!(body: "YES", user_id: 21, track_id: 7 );
Like.create!(user_id: 21, track_id: 7);
Comment.create!(body: "^^^", user_id: 22, track_id: 7 );
Like.create!(user_id: 22, track_id: 7);


Comment.create!(body: "yooooooooo howwwwwww", user_id: 14, track_id: 8 );
Like.create!(user_id: 14, track_id: 8);


Comment.create!(body: "CHECK OUT MY NEW SONG!!!!", user_id: 14, track_id: 9 );
Like.create!(user_id: 14, track_id: 9);
Comment.create!(body: "I like the vibe and the guitar is oh so good", user_id: 15, track_id: 9 );
Like.create!(user_id: 15, track_id: 9);
Comment.create!(body: "The sweet power of music- keep up the great work", user_id: 22, track_id: 9 );
Like.create!(user_id: 22, track_id: 9);
Comment.create!(body: "beauts", user_id: 20, track_id: 9 );
Like.create!(user_id: 20, track_id: 9);
Comment.create!(body: "BRO (:", user_id: 17, track_id: 9 );
Like.create!(user_id: 17, track_id: 9);

Comment.create!(body: "good stuff doggy", user_id: 17, track_id: 10 );
Like.create!(user_id: 17, track_id: 10);
Comment.create!(body: "one of my favorite tracks for real- currently on repeat", user_id: 14, track_id: 10 );
Like.create!(user_id: 14, track_id: 10);

Comment.create!(body: "the verses fit so well into the choruses - inspiring stuff", user_id: 14, track_id: 13 );
Like.create!(user_id: 14, track_id: 13);
Comment.create!(body: "I totally agree ^^ smoothhh", user_id: 22, track_id: 13 );
Like.create!(user_id: 22, track_id: 13);
Comment.create!(body: "BADABOOM", user_id: 16, track_id: 13 );
Like.create!(user_id: 16, track_id: 13);

Comment.create!(body: "enjoyed this lots - check out some tunes of mine i think we have the same taste in songwriting", user_id: 17, track_id: 14 );
Like.create!(user_id: 17, track_id: 14);
Comment.create!(body: "Where did you record this?", user_id: 18, track_id: 14 );
Like.create!(user_id: 18, track_id: 14);

Comment.create!(body: "great track", user_id: 19, track_id: 15 );
Like.create!(user_id: 19, track_id: 15);
Comment.create!(body: "Do you have instagram- I know someone who could help grow your market", user_id: 20, track_id: 15 );
Like.create!(user_id: 20, track_id: 15);

Comment.create!(body: "follow me on fb and ig", user_id: 20, track_id: 16 );
Like.create!(user_id: 20, track_id: 16);
Comment.create!(body: "locked in rn", user_id: 14, track_id: 16 );
Like.create!(user_id: 14, track_id: 16);
Comment.create!(body: "is this on spotify", user_id: 14, track_id: 16 );




