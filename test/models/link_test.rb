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

require 'test_helper'

class LinkTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
