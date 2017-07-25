class Poll < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :choices
end
