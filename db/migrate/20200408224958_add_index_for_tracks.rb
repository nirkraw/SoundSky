class AddIndexForTracks < ActiveRecord::Migration[5.2]
  def change
    add_index :tracks, :artist_id
    add_index :tracks, :playlist_id
  end
end
