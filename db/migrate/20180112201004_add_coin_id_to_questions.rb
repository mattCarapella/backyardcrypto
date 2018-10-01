class AddCoinIdToQuestions < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :coin_id, :integer
    add_index :questions, :coin_id
  end
end
