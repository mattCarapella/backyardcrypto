class AddDefaultAcceptedToCoin < ActiveRecord::Migration[5.1]
	def up
	  change_column :coins, :accepted, :boolean, default: false

	end

	def down
	  change_column :coins, :accepted, :boolean, default: nil
	end
end
