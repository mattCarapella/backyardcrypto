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

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
