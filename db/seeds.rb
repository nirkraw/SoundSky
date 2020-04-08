# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all 
User.create!(id: 14, username: "demoUser", password_digest: "$2a$12$tmRCrkwYbQn5Fvqouu5vFuAGDZHv7eatIREXENEO1a5A746.iHp6.")
User.create!(id: 1, username: "John Mayer", password_digest: "$2a$12$FrjouNu9TSayCBxYR7w.J.Zgo2bja/8M9Xucm/Z.DdVq3MN2gt8S2")

Track.delete_all
Track.create!(id: 1, title: "Slow Dancing In A Burning Room", genre: "pop", artist_id: 1)
Track.create!(id: 2, title: "Stop This Train", genre: "pop", artist_id: 1)
Track.create!(id: 3, title: "Bold As Love", genre: "pop", artist_id: 1)
