class AddPendingToAll < ActiveRecord::Migration[5.1]
  def change
    add_column :links, :pending, :boolean, :default => true
    add_column :events, :pending, :boolean, :default => true
    add_column :questions, :pending, :boolean, :default => true
    add_column :coins, :pending, :boolean, :default => true 
  end
end
