require 'open-uri'
require 'nokogiri'
require 'csv'

module LinksHelper

	def post_links
		url = "http://www.reddit.com/r/bitcoin"

		curr={}
		website_list=[]
		name_list=[]
		document = open(url)
		content = document.read
		parsed_content = Nokogiri::HTML(content)

		link_scrape = parsed_content.css('.md a')
	end
end

