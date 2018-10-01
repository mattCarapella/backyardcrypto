class AddDefaultValueToAccepted < ActiveRecord::Migration[5.1]
  def change
  	change_column_default :links, :accepted, false
  end
end
