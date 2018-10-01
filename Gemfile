source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.1.4'
gem 'pg', '~> 0.18'             # Use Postgresql for database
gem 'sass-rails', '~> 5.0'      # Use SCSS for stylesheets
gem 'uglifier', '>= 1.3.0'      # Use Uglifier as compressor for JavaScript assets
gem 'coffee-rails', '~> 4.2'    # Use CoffeeScript for .coffee assets and views
gem 'turbolinks', '~> 5'        # Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'jbuilder', '~> 2.5'        # Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
# gem 'redis', '~> 3.0'         # Use Redis adapter to run Action Cable in production

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13'   # Adds support for Capybara system testing and selenium driver
  gem 'selenium-webdriver'
  # gem 'sqlite3'             # Use sqlite3 as the database for Active Record
end

gem 'figaro'
gem 'puma', '~> 3.11', '>= 3.11.3'

#group :development do
  #gem 'web-console', '>= 3.3.0'   # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'spring'      # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'capistrano'
  gem 'capistrano3-puma'
  gem 'capistrano-rails', require: false
  gem 'capistrano-bundler', require: false
  gem 'capistrano-rvm'
  gem 'listen', '~> 3.1', '>= 3.1.5'
#end

gem 'web-console', group: :development

gem 'geocoder'


group :production do
  # gem 'fog', '~> 2.0'
  gem 'rails_12factor'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem 'devise', '~> 4.4'
gem 'carrierwave', '~> 1.2', '>= 1.2.1'
gem 'nokogiri', '~> 1.8', '>= 1.8.1'
gem 'mini_magick', '~> 4.8'
gem 'fog-aws', '~> 2.0'
gem 'watir', '~> 6.10', '>= 6.10.2'
gem 'bootstrap-sass', '~> 3.3', '>= 3.3.7'
gem 'pry-rails', '~> 0.3.6'
gem "chromedriver-helper"
gem 'simple_form', '~> 3.5'
gem 'cancancan', '~> 2.0'
gem 'jquery-rails', '~> 4.3', '>= 4.3.1'
gem 'acts_as_votable', '~> 0.11.1'
gem 'alphabetical_paginate', '~> 2.3', '>= 2.3.2'
gem 'record_tag_helper', '~> 1.0'
gem 'youtube_addy', '~> 1.0', '>= 1.0.4'
gem 'link_thumbnailer', '~> 3.3', '>= 3.3.1'
gem 'ransack', '~> 1.8', '>= 1.8.8'
gem 'kaminari', '~> 1.1', '>= 1.1.1'
gem 'kaminari-bootstrap', '~> 3.0', '>= 3.0.1'
gem 'ckeditor', github: 'galetahub/ckeditor'
gem 'httparty', '~> 0.16.1'
gem 'net-ssh', '> 2.8.0'
gem 'unicorn'
gem 'annotate', '~> 2.7', '>= 2.7.1'
gem 'will_paginate', '~> 3.1', '>= 3.1.6'
gem 'friendly_id', '~> 5.2', '>= 5.2.4'
gem "jquery-ui-rails"
gem 'hamburgers'
