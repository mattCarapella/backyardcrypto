class AddPermalinkToCoins < ActiveRecord::Migration[5.1]
  def change
    add_column :coins, :permalink, :string
  end
end
