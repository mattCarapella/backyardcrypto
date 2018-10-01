# == Schema Information
#
# Table name: coins
#
#  id                  :bigint(8)        not null, primary key
#  link_name           :string
#  currency_name       :string
#  currency_abbrev     :string
#  volume_usd          :float
#  volume_btc          :float
#  picture             :string
#  website1            :string
#  website2            :string
#  website3            :string
#  website4            :string
#  website5            :string
#  website6            :string
#  website7            :string
#  website8            :string
#  question1           :text
#  question2           :text
#  question3           :text
#  question4           :text
#  question5           :text
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  permalink           :string
#  genre               :string
#  moderator_id        :integer
#  accepted            :boolean          default(FALSE)
#  accepted_at         :datetime
#  founder             :string
#  country_of_origin   :string
#  working_product     :string
#  mineable            :boolean
#  whitepaper          :string
#  website             :string
#  reddit              :string
#  slack               :string
#  discord             :string
#  app                 :string
#  github              :string
#  tradingview         :string
#  twitter             :string
#  facebook            :string
#  bitcointalk         :string
#  stackexchange       :string
#  youtube             :string
#  coinmarketcap       :string
#  gitter              :string
#  blockexplorer       :string
#  bitfinex            :string
#  bithumb             :string
#  bitflyer            :string
#  hitbtc              :string
#  kucoin              :string
#  poloniex            :string
#  bitstamp            :string
#  bittrex             :string
#  gdax                :string
#  gemini              :string
#  btcc                :string
#  kraken              :string
#  korbit              :string
#  binance             :string
#  yorbit              :string
#  okcoin              :string
#  date_of_ico         :date
#  telegram            :string
#  weibo               :string
#  money_raised_in_ico :decimal(8, 2)
#  genre_id            :integer
#  user_id             :integer
#  coinmarket_id       :integer
#

require 'test_helper'

class CoinTest < ActiveSupport::TestCase

	def setup
		@coin = Coin.new(name: "xcoin", content: "abcdefg")
	end

	test "should be valid" do
		assert @coin.valid?
	end

	test "should require name" do
		@coin.name = "   "
		assert_not @coin.valid?
	end

	test "should show widget" do
		
	end

end
