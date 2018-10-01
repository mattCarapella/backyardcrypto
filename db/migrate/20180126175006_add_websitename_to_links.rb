class AddWebsitenameToLinks < ActiveRecord::Migration[5.1]
  def change
    add_column :links, :websitename, :string
  end
end
