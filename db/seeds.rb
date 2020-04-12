# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.delete_all 
demo_user = User.create!(id: 14, username: "demoUser", password_digest: "$2a$12$tmRCrkwYbQn5Fvqouu5vFuAGDZHv7eatIREXENEO1a5A746.iHp6.")
    pro_pic = open('https://soundsky-avatars.s3.amazonaws.com/avatar.png')
    cov_pic = open("https://soundsky-avatars.s3.amazonaws.com/coverpicture.jpg")
    demo_user.profile_picture.attach(io: pro_pic, filename: 'profile-avatar.jpg')
    demo_user.cover_picture.attach(io: cov_pic, filename: 'cover-avatar.jpg') 

User.create!(id: 1, username: "John Mayer", password_digest: "$2a$12$FrjouNu9TSayCBxYR7w.J.Zgo2bja/8M9Xucm/Z.DdVq3MN2gt8S2")


Track.delete_all

track4= Track.create!(id:4, title: "Talk At All", genre: "pop", artist_id: 14)
    track4_audio = open("https://soundsky-audio.s3.amazonaws.com/TalkAtAll.mp3")
    track4.audio.attach(io: track4_audio, filename: "Talk_At_All.mp3")

track5= Track.create!(id:5, title: "Same Insane Love", genre: "pop", artist_id: 14)
    track5_audio = open("https://soundsky-audio.s3.amazonaws.com/SameInsaneLove.mp3")
    track5.audio.attach(io: track5_audio, filename: "Same_Insane_Love.mp3")

track6= Track.create!(id:6, title: "I Saw It Coming", genre: "pop", artist_id: 14)
    track6_audio = open("https://soundsky-audio.s3.amazonaws.com/I+Saw+It+Coming.mp3")
    track6.audio.attach(io: track6_audio, filename: "I_Saw_It_Coming.mp3")


