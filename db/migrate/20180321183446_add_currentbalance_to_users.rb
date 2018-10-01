class AddCurrentbalanceToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :currentbalance, :decimal, :precision => 8, :scale => 2 
    add_column :users, :payout_to_date, :decimal, :precision => 8, :scale => 2 
    add_column :users, :bio, :text
    add_column :users, :link1, :string
    add_column :users, :link2, :string
	add_column :users, :link3, :string
	add_column :users, :link4, :string
	add_column :users, :link5, :string
  end
end
