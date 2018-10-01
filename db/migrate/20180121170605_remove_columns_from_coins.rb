class RemoveColumnsFromCoins < ActiveRecord::Migration[5.1]
  def change
    remove_column :coins, :market_cap_usd, :float
    remove_column :coins, :market_cap_btc, :float
    remove_column :coins, :price_usd, :float
    remove_column :coins, :price_btc, :float
    remove_column :coins, :rank, :integer
  end
end
