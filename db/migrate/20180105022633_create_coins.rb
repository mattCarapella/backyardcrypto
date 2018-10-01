class CreateCoins < ActiveRecord::Migration[5.1]
  def change
    create_table :coins do |t|
	    t.string "link_name"
	    t.string "currency_name"
	    t.integer "rank"
	    t.string "currency_abbrev"
	    t.float "market_cap_usd"
	    t.float "market_cap_btc"
	    t.float "price_usd"
	    t.float "price_btc"
	    t.float "volume_usd"
	    t.float "volume_btc"
	    t.string "picture"
	    t.string "website1"
	    t.string "website2"
	    t.string "website3"
	    t.string "website4"
	    t.string "website5"
	    t.string "website6"
	    t.string "website7"
	    t.string "website8"
	    t.text "question1"
	    t.text "question2"
	    t.text "question3"
	    t.text "question4"
	    t.text "question5"
      t.timestamps null: false

    end
    
  end
end
