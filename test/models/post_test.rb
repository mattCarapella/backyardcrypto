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

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
