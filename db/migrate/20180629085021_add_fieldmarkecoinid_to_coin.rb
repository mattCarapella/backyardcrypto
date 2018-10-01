class AddFieldmarkecoinidToCoin < ActiveRecord::Migration[5.1]
  def change
    add_column :coins, :coinmarket_id, :integer
  end
end
