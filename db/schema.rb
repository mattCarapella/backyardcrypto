# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180930172459) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "coins", force: :cascade do |t|
    t.string "link_name"
    t.string "currency_name"
    t.string "currency_abbrev"
    t.float "volume_usd"
    t.float "volume_btc"
    t.string "picture"
    t.string "website1"
    t.string "website2"
    t.string "website3"
    t.string "website4"
    t.string "website5"
    t.string "website6"
    t.string "website7"
    t.string "website8"
    t.text "question1"
    t.text "question2"
    t.text "question3"
    t.text "question4"
    t.text "question5"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "permalink"
    t.string "genre"
    t.integer "moderator_id"
    t.boolean "accepted", default: false
    t.datetime "accepted_at"
    t.string "founder"
    t.string "country_of_origin"
    t.string "working_product"
    t.boolean "mineable"
    t.string "whitepaper"
    t.string "website"
    t.string "reddit"
    t.string "slack"
    t.string "discord"
    t.string "app"
    t.string "github"
    t.string "tradingview"
    t.string "twitter"
    t.string "facebook"
    t.string "bitcointalk"
    t.string "stackexchange"
    t.string "youtube"
    t.string "coinmarketcap"
    t.string "gitter"
    t.string "blockexplorer"
    t.string "bitfinex"
    t.string "bithumb"
    t.string "bitflyer"
    t.string "hitbtc"
    t.string "kucoin"
    t.string "poloniex"
    t.string "bitstamp"
    t.string "bittrex"
    t.string "gdax"
    t.string "gemini"
    t.string "btcc"
    t.string "kraken"
    t.string "korbit"
    t.string "binance"
    t.string "yorbit"
    t.string "okcoin"
    t.date "date_of_ico"
    t.string "telegram"
    t.string "weibo"
    t.decimal "money_raised_in_ico", precision: 8, scale: 2
    t.integer "genre_id"
    t.integer "user_id"
    t.integer "coinmarket_id"
    t.integer "question6"
    t.integer "question7"
    t.integer "question8"
    t.integer "question9"
    t.integer "question10"
    t.string "slug"
    t.boolean "rejected", default: false
    t.boolean "pending", default: true
    t.index ["slug"], name: "index_coins_on_slug", unique: true
  end

  create_table "coins_genres", id: false, force: :cascade do |t|
    t.integer "coin_id"
    t.integer "genre_id"
  end

  create_table "comments", force: :cascade do |t|
    t.integer "post_id"
    t.text "body"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_comments_on_post_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "editor_files", force: :cascade do |t|
    t.string "file"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.text "content"
    t.datetime "date"
    t.integer "coin_id"
    t.integer "user_id"
    t.boolean "accepted", default: false
    t.integer "upvotes", default: 0
    t.integer "downvotes", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "link"
    t.string "picture"
    t.time "time"
    t.string "city"
    t.string "state"
    t.string "country"
    t.text "description"
    t.boolean "rejected", default: false
    t.boolean "pending", default: true
  end

  create_table "friendly_id_slugs", id: :serial, force: :cascade do |t|
    t.string "slug", null: false
    t.integer "sluggable_id", null: false
    t.string "sluggable_type", limit: 50
    t.string "scope"
    t.datetime "created_at"
    t.index ["slug", "sluggable_type", "scope"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope", unique: true
    t.index ["slug", "sluggable_type"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type"
    t.index ["sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_id"
    t.index ["sluggable_type"], name: "index_friendly_id_slugs_on_sluggable_type"
  end

  create_table "genres", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "coin_id"
    t.string "displayname"
    t.string "slug"
    t.index ["slug"], name: "index_genres_on_slug", unique: true
  end

  create_table "links", force: :cascade do |t|
    t.string "url"
    t.integer "coin_id"
    t.integer "user_id"
    t.boolean "accepted", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "websitename"
    t.string "tag"
    t.string "link_type"
    t.boolean "rejected", default: false
    t.boolean "pending", default: true
  end

  create_table "posts", force: :cascade do |t|
    t.text "content"
    t.string "url"
    t.string "picture"
    t.integer "coin_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.string "title"
  end

  create_table "questions", force: :cascade do |t|
    t.integer "ques_num"
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.integer "coin_id"
    t.boolean "accepted", default: false
    t.datetime "accepted_at"
    t.string "term"
    t.text "description"
    t.boolean "rejected", default: false
    t.boolean "pending", default: true
    t.index ["coin_id"], name: "index_questions_on_coin_id"
    t.index ["user_id"], name: "index_questions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
    t.string "wallet"
    t.boolean "admin", default: false
    t.boolean "moderator", default: false
    t.integer "currentbalance", default: 0
    t.integer "payout_to_date", default: 0
    t.text "bio"
    t.string "link1"
    t.string "link2"
    t.string "link3"
    t.string "link4"
    t.string "link5"
    t.string "lname"
    t.string "fname"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "id_photo"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "votes", id: :serial, force: :cascade do |t|
    t.string "votable_type"
    t.integer "votable_id"
    t.string "voter_type"
    t.integer "voter_id"
    t.boolean "vote_flag"
    t.string "vote_scope"
    t.integer "vote_weight"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["votable_id", "votable_type", "vote_scope"], name: "index_votes_on_votable_id_and_votable_type_and_vote_scope"
    t.index ["voter_id", "voter_type", "vote_scope"], name: "index_votes_on_voter_id_and_voter_type_and_vote_scope"
  end

  add_foreign_key "comments", "users"
end
