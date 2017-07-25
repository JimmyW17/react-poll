class RemoveChoicesFromPoll < ActiveRecord::Migration[5.1]
  def change
    remove_column :polls, :choices
  end
end
