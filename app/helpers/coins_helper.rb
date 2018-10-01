require 'open-uri'
require 'nokogiri'
require 'csv'

module CoinsHelper

	def tester
		puts "========== IT WORKS =========="
	end

	def seed_coin_db

#		_rank=0
		#url = "https://coinmarketcap.com/"
		url = "https://coinmarketcap.com/all/views/all/"

		curr={}
		website_list=[]
		name_list=[]
		document = open(url)
		content = document.read
		parsed_content = Nokogiri::HTML(content)
		# Use the following for the top 100 currencies
		#cointable = parsed_content.css('.col-lg-10').css('.row').css('.col-xs-12').css('#currencies')
		# Use the following for all currencies
		cointable = parsed_content.css('.col-lg-10').css('.row').css('.col-xs-12:nth-child(3)').css('.table-responsive').css('#currencies-all')

		cointable.css("tbody").css("tr").each do |row|
#			_rank+=1
			_currency_name				= row.css('.currency-name-container').inner_text
			_currency_link				= row.css('.currency-name').css('.currency-symbol').css("a").first.values
			_link_name 					= _currency_link[0].gsub("/currencies/", "").gsub("/","")
			_currency_abbrev			= row.css('.currency-name').css('.currency-symbol').css("a").first.inner_text
#			_market_cap_usd				= (row.css('.market-cap').first.attributes["data-usd"].value).to_f
#			_market_cap_btc	 			= (row.css('.market-cap').first.attributes["data-btc"].value).to_f
#			_price_usd						= (row.css('.price').first.attributes["data-usd"].value).to_f
#			_price_btc						= (row.css('.price').first.attributes["data-btc"].value).to_f
#			_volume_usd						= (row.css('.volume').first.attributes["data-usd"].value).to_f
#			_volume_btc						= (row.css('.volume').first.attributes["data-btc"].value).to_f

			puts _currency_name
			
			Coin.create(link_name: _link_name,
    							currency_name: _currency_name,
    							currency_abbrev: _currency_abbrev)

		end
	end

	def get_websites
		$url_list = Array.new
		$list_of_sites = {}

		url 						= "https://coinmarketcap.com/"
		document 				= open(url)
		content 				= document.read
		parsed_content 	= Nokogiri::HTML(content)
		cointable 			= parsed_content.css('.col-lg-10').css('.row').css('.col-xs-12').css('#currencies')
		
		cointable.css("tbody").css("tr").each do |row|
			currency_name					= row.css('.currency-name-container').inner_text
			currency_link					= row.css('.currency-name').css('.currency-symbol').css("a").first.values
			link_name 						= currency_link[0].gsub("/currencies/", "").gsub("/","")
			$url_list << [link_name, currency_name]
		end

		$url_list.each do |url|
			site_number=1
			coin_arr 				= Array.new
			url_name				= url[0]
			coin_name 				= url[1]
			url 					= "https://coinmarketcap.com/currencies/#{url_name}"
			document 				= open(url)
			content 				= document.read
			parsed_content 	= Nokogiri::HTML(content)
			links 					= parsed_content.css('.container').css('.list-unstyled')
			puts "Adding #{url_name}..."
			@current = Coin.find_by(link_name: url_name)
			puts @current.currency_name
			
			links.css("li").css("a").each do |row|
				
				n = (site_number).to_s
				@ws = "website" + n
				puts @ws
				website = row.first[1]
				website_name = row.inner_text
				site_number+=1
				@current.website1 = website
				#coin_arr.push([website_name, website])

				puts @current.website1
			end

		end
	end


end
