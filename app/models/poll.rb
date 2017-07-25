class Poll < ApplicationRecord
  belongs_to :user
  has_many :comments
  serialize :choices, Array
end
