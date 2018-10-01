class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.text :content
      t.datetime :date
      t.integer :coin_id
      t.integer :user_id
      t.boolean :accepted, :default => false
      t.integer :upvotes, :default => 0
      t.integer :downvotes, :default => 0

      t.timestamps
    end
  end
end
