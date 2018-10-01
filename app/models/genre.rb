# == Schema Information
#
# Table name: genres
#
#  id          :bigint(8)        not null, primary key
#  name        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  coin_id     :integer
#  displayname :string
#

class Genre < ApplicationRecord
	extend FriendlyId
  friendly_id :name, use: [:slugged, :history]
	has_and_belongs_to_many :coins
end
