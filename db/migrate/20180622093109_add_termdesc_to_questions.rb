class AddTermdescToQuestions < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :term, :string
    add_column :questions, :description, :text
  end
end
