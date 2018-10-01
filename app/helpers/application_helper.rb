module ApplicationHelper

	def seed_coins
		url = "https://coinmarketcap.com/"
		#url = "https://coinmarketcap.com/all/views/all/"
		curr={}
		website_list=[]
		name_list=[]
		document = open(url)
		content = document.read
		parsed_content = Nokogiri::HTML(content)
		cointable = parsed_content.css('.col-lg-10').css('.row').css('.col-xs-12').css('#currencies')
		cointable.css("tbody").css("tr").each do |row|
			_currency_name				= row.css('.currency-name-container').inner_text
			_currency_link				= row.css('.currency-name').css('.currency-symbol').css("a").first.values
			_link_name 						= _currency_link[0].gsub("/currencies/", "").gsub("/","")
			_currency_abbrev			= row.css('.currency-name').css('.currency-symbol').css("a").first.inner_text

			Coin.create(link_name: _link_name,
    							currency_name: _currency_name,
    							currency_abbrev: _currency_abbrev)
		end
	end

	def bool_to_words(x)
		x ? "Yes" : "No"
	end

end