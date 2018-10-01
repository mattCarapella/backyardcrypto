class AddFieldToLink < ActiveRecord::Migration[5.1]
  def change
    add_column :links, :link_type, :string
  end
end
