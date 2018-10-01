class CreateEditorFiles < ActiveRecord::Migration[5.1]
  def change
    create_table :editor_files do |t|
      t.string :file
      t.integer :user_id

      t.timestamps
    end
  end
end
