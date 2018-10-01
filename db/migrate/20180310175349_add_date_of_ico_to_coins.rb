class AddDateOfIcoToCoins < ActiveRecord::Migration[5.1]
  def change
  	add_column :coins, :date_of_ico, :date
  end
end
