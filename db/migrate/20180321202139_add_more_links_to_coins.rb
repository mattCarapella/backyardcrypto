class AddMoreLinksToCoins < ActiveRecord::Migration[5.1]
  def change
    add_column :coins, :telegram, :string
    add_column :coins, :weibo, :string
    add_column :coins, :money_raised_in_ico, :decimal, :precision => 8, :scale => 2
  end
end
