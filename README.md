# Treegram

A simple ruby on rails app developed for the course MYE042 - Internet Technologies @cs.uoi.gr. 
Users can create an account with username, password, and avatar. 
After logging in they can upload photos to their account, tag other users on photos, follow-unfollow users, 
comment on photos and delete their photos.

Install and Run
------------
- You need to have [**ruby 2.5.1**](https://www.ruby-lang.org/en/) installed
- You need to have [**rails 4.2.1**](https://guides.rubyonrails.org/v4.2/) installed
- You need to have [**bundler 1.16.1**](https://bundler.io/) installed
- You need to have [**RubyGems 2.7.7**](https://rubygems.org/) installed
- You need to have [**sqlite**](https://www.sqlite.org/download.html) installed
- Run in `root` folder,
    ~~~~
    bundle install
    ~~~~
- Then start the server,
    ~~~~
    rails -s
    ~~~~

Run with Docker (the easiest way)
------------

### Requirements
- You need to have [**Docker**](https://docs.docker.com/get-docker/) installed
- Run in `root` folder,
    ~~~~
    docker-compose up
    ~~~~
- In your browser visit [localhost:3000](localhost:3000)
### Working with docker
- login to the container,
  ~~~~
    docker-compose exec server /bin/bash 
  ~~~~
- Show all routes,
  ~~~~
    docker-compose run server rake routes
  ~~~~
- Create migration for photo title,
  ~~~~
    rails g migration add_title_to_photos title:string
  ~~~~
- Push migration && run seeds,
  ~~~~
    docker-compose run server rake db:migrate && docker-compose run server bundle exec rake db:seed
  ~~~~
- Generate model follow,
  ~~~~
    docker-compose run server rails g model  Follow follower_id:integer:index  followed_id:integer:index
  ~~~~
- Run seeds,
  ~~~~
    docker-compose run server bundle exec rake db:seed
  ~~~~
- Generate model comment,
  ~~~~
    docker-compose run server rails g model Comment photo_id:integer user_id:integer comment:string
  ~~~~
Motivation
--------
> **To Practice:**
>- Ruby On Rails project setup
>- User authentication
>- Paperclip gem for uploading files
>- SASS 
>- Unit testing with RSPEC
>- Integration testing with CAPYBARA

Original Project Authors
------

Kathryn Carr, J Sivakumaran, and Lizzie Koehler
