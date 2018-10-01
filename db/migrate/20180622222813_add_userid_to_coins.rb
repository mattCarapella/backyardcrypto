class AddUseridToCoins < ActiveRecord::Migration[5.1]
  def change
  	add_column :coins, :user_id, :integer
  end
end
