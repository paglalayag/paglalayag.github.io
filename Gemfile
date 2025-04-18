# frozen_string_literal: true

source "https://rubygems.org"

gem 'jekyll'

gem 'wdm', '>= 0.1.0'
gem "webrick"

# due to crash in dockerized production build https://github.com/protocolbuffers/protobuf/issues/16853
gem 'google-protobuf', force_ruby_platform: true if RUBY_PLATFORM.include?('linux-musl')

group :jekyll_plugins do
	gem 'jekyll-paginate'
	gem 'jekyll-feed'
	gem 'jekyll-seo-tag'
	gem 'jekyll-sitemap'
end

gem 'jekyll-redirect-from'
gem 'jekyll-importmap'