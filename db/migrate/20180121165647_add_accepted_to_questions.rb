class AddAcceptedToQuestions < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :accepted, :boolean, default: false
  end
end
