class RemoveChoicesFromPolls < ActiveRecord::Migration[5.1]
  def change
    remove_column :polls, :choices
    add_column :polls, :choices, :string
  end
end
