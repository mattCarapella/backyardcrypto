# == Schema Information
#
# Table name: questions
#
#  id          :bigint(8)        not null, primary key
#  ques_num    :integer
#  content     :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer
#  coin_id     :integer
#  accepted    :boolean          default(FALSE)
#  accepted_at :datetime
#  term        :string
#  description :text
#

require 'test_helper'

class QuestionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
