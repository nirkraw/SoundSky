class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body
      t.integer :user_id
      t.integer :track_id
      t.integer :parent_comment_id

      t.timestamps
    end
     add_index :comments, :user_id
     add_index :comments, :track_id
     add_index :comments, :parent_comment_id
  end
end
