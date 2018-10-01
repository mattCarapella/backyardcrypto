class RemoveNameFromLinks < ActiveRecord::Migration[5.1]
  def up
    remove_column :links, :name
  end
#  def down
#    add_column :links, :website_name, :string
#  end
end
