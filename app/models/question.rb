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

class Question < ApplicationRecord
	belongs_to :user
	belongs_to :coin 
end
