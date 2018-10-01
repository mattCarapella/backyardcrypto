require 'open-uri'
require 'nokogiri'
require 'csv'

module PostsHelper
	
	def tester
		puts "========== IT WORKS =========="
	end

	def scrape_posts
		url = "http://www.reddit.com/r/bitcoin"
		document = open(url)
		content = document.read
		parsed_content = Nokogiri::HTML(content)
		cointable = parsed_content.css('.spacer').css('#siteTable').css('.title a')

	end

	  def is_link?
	    @post = Post.find(params[:id])
	    if @post.url != nil
	      return true
	    else 
	      return false
	    end
	  end
end
