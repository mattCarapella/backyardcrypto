# == Schema Information
#
# Table name: editor_files
#
#  id         :bigint(8)        not null, primary key
#  file       :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class EditorFile < ApplicationRecord
	belongs_to :user
	mount_uploader :file, EditorUploader
end
