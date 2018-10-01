class CoinsController < ApplicationController

  load_and_authorize_resource param_method: :question_params
  before_action :find_coin, only: [:edit, :update, :destroy ]
  before_action :authenticate_user!, except: [:index, :show]
  before_action :find_user

  def index
    # @search = Coin.ransack(params[:q])
    # @coins = @search.result(distinct: true)
    @coins = Coin.search(params[:currency_name]).paginate(:page => params[:page], :per_page => 100)
  end

  def new
    response = HTTParty.get("https://api.coinmarketcap.com/v2/listings")
    @market_coins = response['data'].map { |w| {id: w['id'], name: w['name'], symbol: w['symbol'], link_name: w['website_slug']} }
    logger.info("market_coins")
    logger.info( @market_coins )
    @coin = Coin.new
  end

  def create
    # @coin = Coin.new(coin_params)
    # params[:coin][:moderator_id] = current_user.id
    # logger.info("moderator_id")
    # logger.info(coin_params.to_json)
    @coin = current_user.coins.build(coin_params)
    if @coin.save!
      flash[:success] = "Coin created"
      redirect_to @coin
    else
      redirect_to new_coin_url
    end
  end

  def show
    @coin = Coin.friendly.find(params[:id])
    #@coin_events = @coin.events
    @coin_events = @coin.events.order(:date)

    #submission count
    @q1 = @coin.questions.where('ques_num = 1 and accepted = false').count
    @q2 = @coin.questions.where('ques_num = 2 and accepted = false').count
    @q3 = @coin.questions.where('ques_num = 3 and accepted = false').count
    @q4 = @coin.questions.where('ques_num = 4 and accepted = false').count

    @q6 = @coin.questions.where('ques_num = 6 and accepted = false').count
    @q7 = @coin.questions.where('ques_num = 7 and accepted = false').count
    @q8 = @coin.questions.where('ques_num = 8 and accepted = false').count
    @q9 = @coin.questions.where('ques_num = 9 and accepted = false').count

    #question objects
    @question1 = @coin.questions.where('ques_num = 1 and accepted = true')
    @question2 = @coin.questions.where('ques_num = 2 and accepted = true')
    @question3 = @coin.questions.where('ques_num = 3 and accepted = true')
    @question4 = @coin.questions.where('ques_num = 4 and accepted = true')

    @question6 = @coin.questions.where('ques_num = 6 and accepted = true')
    @question7 = @coin.questions.where('ques_num = 7 and accepted = true')
    @question8 = @coin.questions.where('ques_num = 8 and accepted = true')
    @question9 = @coin.questions.where('ques_num = 9 and accepted = true')

    #localized event datetime
    @local_ip = get_public_ip_address
    if @local_ip
      @user_timezone = get_timezone
    end
  end

  def edit
    if params[:q].present?
      @question = Question.find_by_id(params[:q])

      @num=@question.ques_num

      if @question.present?
        authorize! :update, @coin
      else
        render file: "#{Rails.root}/public/404", status: :not_found
      end
    else
      authorize! :update, @coin
    end
  end

  def update
    mode = true
    mode = Coin.check_moderator_email(params[:coin][:moderator_email]) if params[:coin][:moderator_email].present?
    if mode
      @coin.moderator_id = User.find_by_email(params[:coin][:moderator_email]).id if params[:coin][:moderator_email].present?
      logger.info("COINS")
      logger.info(@coin.moderator_id)
      if @coin.save! && @coin.update_attributes(coin_params)
        logger.info("This is update coins")
        redirect_to @coin
      else
        render 'edit'
      end
    end
  end

  def destroy
    Coin.find(params[:id]).destroy
    redirect_to coins_url
  end

  def flop
    coin = Coin.find(params[:id])
    coin.accepted = !coin.accepted
    coin.save
    redirect_to coin_path(coin)
  end

  private

    def coin_params
      if current_user.try(:admin?)
        params.require(:coin).permit(:moderator_email, :moderator_id, :currency_name, :currency_abbrev, :working_product, :founder,
          :mineable, :date_of_ico, :website, :reddit, :slack, :app, :github, :tradingview, :bitcointalk,
          :stackexchange, :coinmarketcap, :gitter, :blockexplorer, :tradingview, :bitcointalk,
          :bitfinex, :bithumb, :bitflyer, :hitbtc, :kucoin, :poloniex, :bitstamp, :bittrex,
          :gdax, :gemini, :btcc, :kraken, :korbit, :binance, :yorbit, :okcoin, :accepted, :picture, :question1,
          :question2,:question3, :question4, :question6, :question7, :question8, :question9,
          :coinmarket_id,:link_name, :money_raised_in_ico, :facebook, :twitter, :youtube, :whitepaper, :discord, genre_ids:[])
      else
        params.require(:coin).permit( :currency_name, :currency_abbrev, :working_product, :founder,
          :mineable, :date_of_ico, :website, :reddit, :slack, :app, :github, :tradingview, :bitcointalk,
          :stackexchange, :coinmarketcap, :gitter, :blockexplorer, :tradingview, :bitcointalk,
          :stackexchange, :bitfinex, :bithumb, :bitflyer, :hitbtc, :kucoin, :poloniex, :bitstamp, :bittrex,
          :gdax, :gemini, :btcc, :kraken, :korbit, :binance, :yorbit, :okcoin, :accepted, :picture, :question1,
          :question2, :question3, :question4, :question6, :question7, :question8, :question9,
          :coinmarket_id,:link_name, :money_raised_in_ico, :facebook, :twitter, :youtube, :whitepaper, :discord,:moderator_id, genre_ids:[])
      end
    end

    def find_coin
      @coin = Coin.friendly.find(params[:id])
    end

    def find_user
      @user = current_user
    end

    def append_question
      question = Question.find(params[:q])
      case question.ques_num
        when 1
          @coin.question1 =  @coin.question1 + "\n\n\n" + question.content
        when 2
          @coin.question2 =  @coin.question2 + "\n\n\n" + question.term + "\n\n" + question.description
        when 3
          @coin.question3 =  @coin.question3 + "\n\n\n" + question.term + "\n\n" + question.description
        when 4
          @coin.question4 =  @coin.question4 + "\n\n\n" + question.content
        when 6
          @coin.question6 =  @coin.question6 + "\n\n\n" + question.content
        when 7
          @coin.question7 =  @coin.question7 + "\n\n\n" + question.content
        when 8
          @coin.question8 =  @coin.question8 + "\n\n\n" + question.content
        when 9
          @coin.question9 =  @coin.question9 + "\n\n\n" + question.content
        else
          ""
      end
    end

    def get_public_ip_address
      require "open-uri"
      if request.remote_ip == '127.0.0.1'
        return open('https://api.ipify.org/').read
      else
        return request.remote_ip
      end
    end

    def get_timezone
      response = HTTParty.get('https://maps.googleapis.com/maps/api/timezone/json?location=' + Geocoder.coordinates(@local_ip)[0].to_s +
      ',' + Geocoder.coordinates(@local_ip)[1].to_s + '&timestamp=1331161200&key=AIzaSyC4O1UtLIsHpNjbRCFv_69yrgUFRJSoMzE') #to env variables
      response_json = response.parsed_response
      return response_json["timeZoneId"]
    end


end
