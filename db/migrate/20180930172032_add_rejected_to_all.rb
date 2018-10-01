class AddRejectedToAll < ActiveRecord::Migration[5.1]
  def change
    add_column :links, :rejected, :boolean, :default => false
    add_column :events, :rejected, :boolean, :default => false
    add_column :questions, :rejected, :boolean, :default => false
    add_column :coins, :rejected, :boolean, :default => false 
  end
end
