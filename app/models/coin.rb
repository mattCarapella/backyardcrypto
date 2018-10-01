# == Schema Information
#
# Table name: coins
#
#  id                  :bigint(8)        not null, primary key
#  link_name           :string
#  currency_name       :string
#  currency_abbrev     :string
#  volume_usd          :float
#  volume_btc          :float
#  picture             :string
#  website1            :string
#  website2            :string
#  website3            :string
#  website4            :string
#  website5            :string
#  website6            :string
#  website7            :string
#  website8            :string
#  question1           :text
#  question2           :text
#  question3           :text
#  question4           :text
#  question5           :text
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  permalink           :string
#  genre               :string
#  moderator_id        :integer
#  accepted            :boolean          default(FALSE)
#  accepted_at         :datetime
#  founder             :string
#  country_of_origin   :string
#  working_product     :string
#  mineable            :boolean
#  whitepaper          :string
#  website             :string
#  reddit              :string
#  slack               :string
#  discord             :string
#  app                 :string
#  github              :string
#  tradingview         :string
#  twitter             :string
#  facebook            :string
#  bitcointalk         :string
#  stackexchange       :string
#  youtube             :string
#  coinmarketcap       :string
#  gitter              :string
#  blockexplorer       :string
#  bitfinex            :string
#  bithumb             :string
#  bitflyer            :string
#  hitbtc              :string
#  kucoin              :string
#  poloniex            :string
#  bitstamp            :string
#  bittrex             :string
#  gdax                :string
#  gemini              :string
#  btcc                :string
#  kraken              :string
#  korbit              :string
#  binance             :string
#  yorbit              :string
#  okcoin              :string
#  date_of_ico         :date
#  telegram            :string
#  weibo               :string
#  money_raised_in_ico :decimal(8, 2)
#  genre_id            :integer
#  user_id             :integer
#  coinmarket_id       :integer
#

class Coin < ApplicationRecord
  extend FriendlyId
  friendly_id :link_name, use: [:slugged, :finders, :history]
  
  has_many :questions, dependent: :destroy
  has_many :events, dependent: :destroy
  has_many :links, dependent: :destroy
  belongs_to :moderator, class_name: "User" , :foreign_key => "moderator_id",  optional: true
  belongs_to :user
  has_and_belongs_to_many :genres

  mount_uploader :picture, PictureUploader
  validate :picture_size
  validates :currency_name, presence: true

   attr_accessor :moderator_email

  # before_save do
  #   if :moderator_email.present?
  #     self.moderator_id = User.find_by_email(moderator_email).id
  #   end
  # end

  def self.search(search)
    coins = all.where('accepted = ?', true).order('id ASC')
    coins = coins.where("currency_name like ? AND accepted = ?", "%#{search.capitalize}%", true) if search
    coins
  end

  # def should_generate_new_friendly_id?
  #   new_record?
  # end

  private

    def picture_size
      if picture.size > 5.megabytes
        errors.add(:picture, "Picture must be smalled than 5MB.")
      end
    end

    def self.check_moderator_email(moderator_email)
       moderator = User.where("moderator=? AND email=?", true,moderator_email)
       if moderator.present?
          return true
       else
          return false
       end
    end

end
