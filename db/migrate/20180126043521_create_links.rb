class CreateLinks < ActiveRecord::Migration[5.1]
  def change
    create_table :links do |t|
      t.string :url
      t.string :name
      t.integer :coin_id
      t.integer :user_id
      t.boolean :accepted

      t.timestamps
    end
  end
end
