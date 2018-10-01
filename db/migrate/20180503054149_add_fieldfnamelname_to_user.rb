class AddFieldfnamelnameToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :lname, :string
    add_column :users, :fname, :string
  end
end
