class AddGenreIdToCoins < ActiveRecord::Migration[5.1]
  def change
  	add_column :coins, :genre_id, :integer
  end
end
