class AddSubquestionsToCoin < ActiveRecord::Migration[5.1]
  def change
  	add_column :coins, :question6, :integer
  	add_column :coins, :question7, :integer
  	add_column :coins, :question8, :integer
  	add_column :coins, :question9, :integer
  	add_column :coins, :question10, :integer
  end
end
