class AddItemsToCoins < ActiveRecord::Migration[5.1]
  def change
  	add_column :coins, :founder, :string
  	add_column :coins, :country_of_origin, :string
  	add_column :coins, :working_product, :string
  	add_column :coins, :mineable, :boolean
  	add_column :coins, :date_of_ico, :datetime

  	#links
  	add_column :coins, :whitepaper, :string
  	add_column :coins, :website, :string
  	add_column :coins, :reddit, :string
  	add_column :coins, :slack, :string
  	add_column :coins, :discord, :string
  	add_column :coins, :app, :string
  	add_column :coins, :github, :string
  	add_column :coins, :tradingview, :string
  	add_column :coins, :twitter, :string
  	add_column :coins, :facebook, :string
  	add_column :coins, :bitcointalk, :string
  	add_column :coins, :stackexchange, :string
  	add_column :coins, :youtube, :string
  	add_column :coins, :coinmarketcap, :string
  	add_column :coins, :gitter, :string
  	add_column :coins, :blockexplorer, :string

  	#exchanges
  	add_column :coins, :bitfinex, :string
  	add_column :coins, :bithumb, :string
  	add_column :coins, :bitflyer, :string
  	add_column :coins, :hitbtc, :string
  	add_column :coins, :kucoin, :string
  	add_column :coins, :poloniex, :string
  	add_column :coins, :bitstamp, :string
  	add_column :coins, :bittrex, :string
  	add_column :coins, :gdax, :string
  	add_column :coins, :gemini, :string
  	add_column :coins, :btcc, :string
  	add_column :coins, :kraken, :string
  	add_column :coins, :korbit, :string
  	add_column :coins, :binance, :string
  	add_column :coins, :yorbit, :string
  	add_column :coins, :okcoin, :string



  end
end
