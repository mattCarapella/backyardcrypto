# == Schema Information
#
# Table name: links
#
#  id          :bigint(8)        not null, primary key
#  url         :string
#  coin_id     :integer
#  user_id     :integer
#  accepted    :boolean          default(FALSE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  websitename :string
#  tag         :string
#  link_type   :string
#

class Link < ApplicationRecord
	belongs_to :user
	belongs_to :coin
	has_many :comments, dependent: :destroy
end
