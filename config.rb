###
# Compass
###

# Change Compass configuration
compass_config do |config|
  config.output_style = :compact
end

###
# Page options, layouts, aliases and proxies
###

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  blog.name   = "journal"
  blog.prefix = "journal"

  blog.permalink = ":title.html"

  # Layout and Template
  blog.layout            = "article"
end

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  blog.name   = "projects"
  blog.prefix = "projects"

  blog.permalink = ":title.html"

  # Layout and Template
  blog.layout            = "project"
end

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  blog.name   = "dedicated"
  blog.prefix = "dedicated"

  blog.permalink = "to/:title.html"

  # Layout and Template
  blog.layout            = "article"
end

activate :directory_indexes

###
# Helpers
###

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Methods defined in the helpers block are available in templates
helpers do
  def posts_by_weight
    blog('projects').articles.select do |article|
      article.data.weight
    end.sort_by { |article| article.data.weight }
  end

  def reading_time(input)
    words_per_minute = 180

    words = input.split.size
    minutes = (words/words_per_minute).floor
    minutes_label = ' minute'
    minutes > 0 ? "About a #{minutes} #{minutes_label}" : 'Less than a 1 minute'
  end

  def active_link_to(caption, url, options = {})
    if current_page.url == "#{url}/"
      options[:class] = "current"
    end

    link_to(caption, url, options)
  end

   def is_blog_article?
    !current_article.nil?
  end
end

set :css_dir, 'assets/css'

set :js_dir, 'assets/js'

set :images_dir, 'assets/images'

set :partials_dir, 'partials'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end