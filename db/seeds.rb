require 'open-uri'
require 'nokogiri'
require 'csv'

#url = "https://coinmarketcap.com/coins/views/all/"
#curr={}
#website_list=[]
#name_list=[]
#document = open(url)
#content = document.read
#parsed_content = Nokogiri::HTML(content)
#cointable = parsed_content.css('.col-lg-10').css('.row').css('.col-xs-12').css('#currencies')
#cointable.css("tbody").css("tr").each do |row|
#	_currency_name				= row.css('.currency-name-container').inner_text
#	_currency_link				= row.css('.currency-name').css('.currency-symbol').css("a").first.values
#	_link_name 						= _currency_link[0].gsub("/currencies/", "").gsub("/","")
#	_currency_abbrev			= row.css('.currency-name').css('.currency-symbol').css("a").first.inner_text
#	Coin.create(link_name: _link_name,
#			currency_name: _currency_name,
#			currency_abbrev: _currency_abbrev)
#end

User.create!(username:  "admin",
            email: "admin@backyardcrypto.com",
            password:              "password",
            password_confirmation: "password",
            admin: true,
            moderator: false,
            fname: "Admin",
            lname: "User" )

User.create!(username:  "moderator",
            email: "moderator@backyardcrypto.com",
            password:              "password",
            password_confirmation: "password",
            admin: false,
            moderator: true,
            fname: "Moderator",
            lname: "User" )

User.create!(username:  "admin_moderator",
            email: "admin_moderator@backyardcrypto.com",
            password:              "password",
            password_confirmation: "password",
            admin: true,
            moderator: true,
            fname: "admin_moderator",
            lname: "User" )

User.create!(username:  "user1",
            email: "user@backyardcrypto.com",
            password:              "password",
            password_confirmation: "password",
            admin: false,
            fname: "Ed",
            lname: "User" )

User.create!(username:  "user2",
            email: "user2@backyardcrypto.com",
            password:              "password",
            password_confirmation: "password",
            admin: false,
            fname: "Bob",
            lname: "User" )

Genre.create!(name: "dividends", displayname: "Dividends")
Genre.create!(name: "store_of_value", displayname: "Store of Value")
Genre.create!(name: "exchanges", displayname: "Exchanges ")
Genre.create!(name: "finance", displayname: "Finance")
Genre.create!(name: "masternodes", displayname: "Masternodes")
Genre.create!(name: "privacy", displayname: "Privacy")
Genre.create!(name: "platforms", displayname: "Platforms")
Genre.create!(name: "media_and_advertising", displayname: "Media & Advertising")
Genre.create!(name: "iot_and_mesh_networks", displayname: "IOT & Mesh Networks")
Genre.create!(name: "computing_and_data", displayname: "Computing & Data")
Genre.create!(name: "gaming", displayname: "Gaming")
Genre.create!(name: "prediction_markets", displayname: "Prediction Markets")
Genre.create!(name: "identity", displayname: "Identity")
Genre.create!(name: "medical", displayname: "Medical")
Genre.create!(name: "energy_and_utilities", displayname: "Energy & Utilities")
Genre.create!(name: "social", displayname: "Social")
Genre.create!(name: "proof_of_work", displayname: "Proof of Work")
Genre.create!(name: "proof_of_stake", displayname: "Proof of Stake")

# Create coins using coinmarketcap API

response = HTTParty.get("https://api.coinmarketcap.com/v2/ticker/")

if response["data"]
  response["data"].each_value do |value|
    Coin.create!(
      coinmarket_id: value["id"],
      currency_name: value["name"],
      currency_abbrev: value["symbol"],
      updated_at: value["last_updated"],
      link_name: value["website_slug"],
      user_id: Random.rand(1..3),
      question1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu risus suscipit, semper orci quis, pulvinar ligula. Aenean eros mi, dictum a lectus sed, dapibus convallis nibh. Phasellus magna sapien, euismod sed eros ut, dapibus euismod leo. Nullam varius egestas est a dictum. Sed fringilla sem tellus, eu auctor purus scelerisque id. Nam interdum sit amet mi in tincidunt. Etiam aliquam rutrum orci, ut consequat tellus venenatis quis. Cras massa est, dapibus quis tellus eu, eleifend lacinia velit. Donec posuere eleifend finibus.",
      question4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu risus suscipit, semper orci quis, pulvinar ligula. Aenean eros mi, dictum a lectus sed, dapibus convallis nibh. Phasellus magna sapien, euismod sed eros ut, dapibus euismod leo. Nullam varius egestas est a dictum. Sed fringilla sem tellus, eu auctor purus scelerisque id. Nam interdum sit amet mi in tincidunt. Etiam aliquam rutrum orci, ut consequat tellus venenatis quis. Cras massa est, dapibus quis tellus eu, eleifend lacinia velit. Donec posuere eleifend finibus.",
      # accepted: [true, false].sample,
      accepted: true,
      accepted_at: DateTime.now
    )
  end
end

Event.create!(
  content: "New Bitcoin Event",
  date: DateTime.new(2018,8,1),
  coin_id: 1,
  user_id: 1,
  accepted: true,
  upvotes: 10,
  downvotes: 2,
  city: "Palo Alto",
  state: "CA",
  country: "United States",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu risus suscipit, semper orci quis, pulvinar ligula. Aenean eros mi, dictum a lectus sed, dapibus convallis nibh. Phasellus magna sapien, euismod sed eros ut, dapibus euismod leo. Nullam varius egestas est a dictum. Sed fringilla sem tellus, eu auctor purus scelerisque id. Nam interdum sit amet mi in tincidunt. Etiam aliquam rutrum orci, ut consequat tellus venenatis quis. Cras massa est, dapibus quis tellus eu, eleifend lacinia velit. Donec posuere eleifend finibus."
)

(1..4).each do |num|
  Question.create!(
    ques_num: num,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu risus suscipit, semper orci quis, pulvinar ligula. Aenean eros mi, dictum a lectus sed, dapibus convallis nibh. Phasellus magna sapien, euismod sed eros ut, dapibus euismod leo. Nullam varius egestas est a dictum. Sed fringilla sem tellus, eu auctor purus scelerisque id. Nam interdum sit amet mi in tincidunt. Etiam aliquam rutrum orci, ut consequat tellus venenatis quis. Cras massa est, dapibus quis tellus eu, eleifend lacinia velit. Donec posuere eleifend finibus.",
    user_id: 1,
    coin_id: 1,
    accepted: true,
    accepted_at: DateTime.now(2018,9,28),
    term: "test term",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu risus suscipit, semper orci quis, pulvinar ligula. Aenean eros mi, dictum a lectus sed, dapibus convallis nibh. Phasellus magna sapien, euismod sed eros ut, dapibus euismod leo. Nullam varius egestas est a dictum. Sed fringilla sem tellus, eu auctor purus scelerisque id. Nam interdum sit amet mi in tincidunt. Etiam aliquam rutrum orci, ut consequat tellus venenatis quis. Cras massa est, dapibus quis tellus eu, eleifend lacinia velit. Donec posuere eleifend finibus."
  )
end
