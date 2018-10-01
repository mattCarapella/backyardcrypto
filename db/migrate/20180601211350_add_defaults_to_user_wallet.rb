class AddDefaultsToUserWallet < ActiveRecord::Migration[5.1]
  def up
    change_column :users, :currentbalance, :integer, default: 0
    change_column :users, :payout_to_date, :integer, default: 0
  end

  def down
    change_column :users, :currentbalance, :integer, default: nil
    change_column :users, :payout_to_date, :integer, default: nil
  end
end
