class AddGenreToCoins < ActiveRecord::Migration[5.1]
  def change
    add_column :coins, :genre, :string
  end
end
