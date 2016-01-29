# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all

User.create!(email: 'fred@fred.com', password: "password")

10.times do
  email = Faker::Internet.email
  User.create!(email: email, password: "password")
end

Post.destroy_all
30.times do
  Post.create!(title: "post", user_id: User.ids.sample)
end

rare_user = User.create!(email: "rare_dude@gmail.com", password: "123456")
rare_user.posts.create!(title: "Rare post")
