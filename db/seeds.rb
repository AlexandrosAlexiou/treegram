# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#

users = [{:email => 'alex@alex.com', :password => 'alex'},
          {:email => 'lala@lala.com', :password => 'lala'},
]

users.each do |user|
  User.create!(user)
end