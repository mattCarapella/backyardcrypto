class StaticPagesController < ApplicationController
  def home
    @search = Coin.ransack(params[:q])
    @coins = @search.result(distinct: true)
  end

  def FAQ
  end

  def about
  end
end
