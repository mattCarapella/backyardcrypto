# == Schema Information
#
# Table name: users
#
#  id                     :bigint(8)        not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string
#  last_sign_in_ip        :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  username               :string
#  wallet                 :string
#  admin                  :boolean          default(FALSE)
#  moderator              :boolean          default(FALSE)
#  currentbalance         :integer          default(0)
#  payout_to_date         :integer          default(0)
#  bio                    :text
#  link1                  :string
#  link2                  :string
#  link3                  :string
#  link4                  :string
#  link5                  :string
#  lname                  :string
#  fname                  :string
#

class User < ApplicationRecord
  acts_as_votable
  has_many :coins
  has_many :questions, dependent: :destroy
  has_many :events, dependent: :destroy
  has_many :links, dependent: :destroy
  has_many :posts, dependent: :destroy
  has_many :moderated_coins, class_name: "Coin", :foreign_key => "moderator_id"
  has_many :editor_files

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, 
         :validatable, authentication_keys: [:login]


  validates :username, presence: :true, uniqueness: { case_sensitive: false }
  validates_format_of :username, with: /^[a-zA-Z0-9_\.]*$/, :multiline => true
  validate :validate_username

  mount_uploader :id_photo, PictureUploader
  validate :picture_size

  def validate_username
    if User.where(email: username).exists?
      errors.add(:username, :invalid)
    end
  end

  def login=(login)
    @login = login
  end

  def login
    @login || self.username || self.email
  end

  def self.find_for_database_authentication(warden_conditions)
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions.to_h).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
    elsif conditions.has_key?(:username) || conditions.has_key?(:email)
      where(conditions.to_h).first
    end
  end


  private 

    def picture_size
      if id_photo.size > 5.megabytes
        errors.add(:picture, "Picture must be smalled than 5MB.")
      end
    end

end
