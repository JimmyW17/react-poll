class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.string :voter
      t.integer :user_id
      t.integer :poll_id
      t.timestamps
    end
  end
end
