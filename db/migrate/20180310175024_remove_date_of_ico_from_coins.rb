class RemoveDateOfIcoFromCoins < ActiveRecord::Migration[5.1]
	def change
	  remove_column :coins, :date_of_ico, :datetime
	end
end
