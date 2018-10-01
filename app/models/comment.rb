# == Schema Information
#
# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  post_id    :integer
#  body       :text
#  user_id    :bigint(8)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post
end
