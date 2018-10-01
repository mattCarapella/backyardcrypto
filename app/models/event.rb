# == Schema Information
#
# Table name: events
#
#  id          :bigint(8)        not null, primary key
#  content     :text
#  date        :datetime
#  coin_id     :integer
#  user_id     :integer
#  accepted    :boolean          default(FALSE)
#  upvotes     :integer          default(0)
#  downvotes   :integer          default(0)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  link        :string
#  picture     :string
#  time        :time
#  city        :string
#  state       :string
#  country     :string
#  description :text
#

class Event < ApplicationRecord
  acts_as_votable
  belongs_to :user
  belongs_to :coin

  scope :later_events, Proc.new { |current = DateTime.now, limit = 7| where('date > ?', current).order("date ASC").limit(limit) }
  scope :prior_events, Proc.new { |current = DateTime.now, limit = 3| where('date < ?', current).order("date DESC").limit(limit) }
end
