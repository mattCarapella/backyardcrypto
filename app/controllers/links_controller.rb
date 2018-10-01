class LinksController < ApplicationController
 
  before_action :find_link, only: [:show, :edit, :update, :destroy ]
  before_action :find_coin
  before_action :find_user
  before_action :find_links
  before_action :partition_links
	before_action :authenticate_user!

  def index  
  	authorize! :index, @link
    logger.info("Coin id ")
    logger.info(@coin.id)
    logger.info(@links.to_json)
  end

  def pending  
    authorize! :update, @link
    logger.info(@links.to_json)
  end  

  def rejected
    #@links = Link.where(coin_id: @coin.id).order("created_at DESC")
    #@rejected = @links.select { |link| link.rejected == true }
    authorize! :update, @link
    logger.info(@links.to_json)
  end
  
  def show
  	authorize! :read, @link
  end

  def new
    @link = current_user.links.build
  end

	def create
    params[:link][:accepted] = false
	  @link = current_user.links.build(link_params)
	  @link.coin = @coin
	  if @link.save!
	    redirect_to coin_link_path(@coin.id, @link.id)
	  else
	    render 'new'
	  end
	end

  def edit
  end

  def update
  	authorize! :update, @link
    if @link.update(link_params)
      redirect_to coin_link_path(@coin.id, @link.id)
    else
      redirect_to 'edit'
    end
  end	

  def destroy
  	authorize! :destroy, @link
    @link.destroy
    redirect_to coin_path(@coin.id)
  end

  def flop
    authorize! :update, @link
    link = Link.find(params[:id])
    link.accepted = !link.accepted
    if link.accepted?
      link.pending = false
      link.rejected = false
    elsif !link.accepted?
      link.pending = true
    end
    link.save
    redirect_to coin_links_path(link.coin_id)
  end

  def reject
    authorize! :update, @link
    link = Link.find(params[:id])
    link.rejected = !link.rejected
    link.accepted = false
    link.pending = false
    link.save
    redirect_to coin_links_path(link.coin_id)
  end

  def status_name
    status ? "Yes" : "No"
  end

  private

  	def accepted?
  		@link.accepted
  	end

  	def find_link
  		@link = Link.find(params[:id])
  	end

    def find_links
      @links = Link.where(coin_id: @coin.id).order("created_at DESC")
    end

    def partition_links
      @approved, @pending = @links.partition(&:accepted) 
    end

    def find_coin
      @coin = Coin.find(params[:coin_id])
    end

  	def link_params
  		params.require(:link).permit(:url, :websitename, :accepted,:link_type)
  	end

    def find_user
      @user = current_user
    end

end
