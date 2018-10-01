class AddTagToLinks < ActiveRecord::Migration[5.1]
  def change
    add_column :links, :tag, :string
  end
end
