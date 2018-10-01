class AddDefaultValueToUpvotesDownvotes < ActiveRecord::Migration[5.1]
	def up
	  change_column :events, :upvotes, :integer, default: 0
	  change_column :events, :downvotes, :integer, default: 0
	  change_column :events, :accepted, :boolean, default: false
	end

	def down
	  change_column :events, :upvotes, :integer, default: nil
	  change_column :events, :downvotes, :integer, default: nil
	  change_column :events, :accepted, :boolean, default: nil
	end
end
