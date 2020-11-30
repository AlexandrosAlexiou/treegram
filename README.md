Treegram

(modified by S. Anastasiadis and A. Katsoulieris for the course MYE042 Internet Technologies, Department of Computer Science and Engineering, School of Enginering, University of Ioannina, Ioannina, Greece)

==============

A simple ruby on rails app. Allows a user to create an account with username, password, and avatar. After login user can upload photos to their account and tag other users in the photos.

Installation and Usage
------------
Run Postrges Sever

Clone or download this repository and cd into indent directory

```
$ rake db:create
$ rake db:migrate
$ rails server
```

In your browser visit localhost:3000

Motivation
--------
> **To Practice:**
>- Ruby On Rails project setup
>- User authentication
>- Paperclip gem for uploading files
>- SASS 
>- Unit testing with RSPEC
>- Integration testing with CAPYBARA

Authors
------

Kathryn Carr, J Sivakumaran, and Lizzie Koehler

License
-------

MIT license

### Show all routes
docker-compose run server rake routes 
### Create migration for photo title
rails g migration add_title_to_photos title:string
### Push migration
docker-compose run server rake db:migrate && docker-compose run server bundle exec rake db:seed
### Generate new scaffold for follow system
docker-compose run server rails g model  Follow follower_id:integer:index  followed_id:integer:index
### Run seeds
docker-compose run server bundle exec rake db:seed