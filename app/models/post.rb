# == Schema Information
#
# Table name: posts
#
#  id         :bigint(8)        not null, primary key
#  content    :text
#  url        :string
#  picture    :string
#  coin_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#  title      :string
#

class Post < ApplicationRecord
	acts_as_votable
	belongs_to :user
	belongs_to :coin
	has_many :comments, dependent: :destroy
end
