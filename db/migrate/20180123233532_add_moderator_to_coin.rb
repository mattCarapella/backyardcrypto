class AddModeratorToCoin < ActiveRecord::Migration[5.1]
  def change
    add_column :coins, :moderator_id, :int
  end
end
