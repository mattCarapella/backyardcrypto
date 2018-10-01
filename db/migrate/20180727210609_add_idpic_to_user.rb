class AddIdpicToUser < ActiveRecord::Migration[5.1]
  def change
  	add_column :users, :id_photo, :string
  end
end
