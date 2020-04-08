class RemoveIndexFromTracks < ActiveRecord::Migration[5.2]
  def change
    remove_index :tracks, :artist_id
    remove_index :tracks, :playlist_id
  end
end
