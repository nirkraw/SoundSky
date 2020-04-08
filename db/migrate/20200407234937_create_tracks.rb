class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.integer :artist_id, null: false
      t.integer :playlist_id
      t.string :title, null: false
      t.string :description
      t.string :genre

      t.timestamps
    end
    add_index :tracks, :artist_id, unique: true
    add_index :tracks, :playlist_id, unique: true
  end
end
