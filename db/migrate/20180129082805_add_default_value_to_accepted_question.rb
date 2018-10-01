class AddDefaultValueToAcceptedQuestion < ActiveRecord::Migration[5.1]
  def change
  	change_column_default :questions, :accepted, false
  end
end
