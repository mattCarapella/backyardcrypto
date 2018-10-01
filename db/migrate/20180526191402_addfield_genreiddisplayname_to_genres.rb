class AddfieldGenreiddisplaynameToGenres < ActiveRecord::Migration[5.1]
  def change
    add_column :genres, :coin_id, :integer
    add_column :genres, :displayname, :string
  end
end
