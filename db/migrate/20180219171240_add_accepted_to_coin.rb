class AddAcceptedToCoin < ActiveRecord::Migration[5.1]
  def change
    add_column :coins, :accepted, :boolean
    add_column :coins, :accepted_at, :datetime
  end
end
