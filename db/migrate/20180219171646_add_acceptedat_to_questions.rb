class AddAcceptedatToQuestions < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :accepted_at, :datetime
  end
end
