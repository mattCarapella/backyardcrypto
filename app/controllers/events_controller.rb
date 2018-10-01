class EventsController < ApplicationController

  before_action :find_event, only: [:show, :edit, :update, :destroy ]
  before_action :find_coin
	before_action :authenticate_user!
  # load_and_authorize_resource param_method: :event_params
  
  def index  
		@events = Event.where(coin_id: @coin.id).order("created_at DESC")
    @coin_events = @coin.events.order(:date)
    @today = Date.current
    @accepted, @pending = @events.partition(&:accepted)
  end
  
  def show
  	authorize! :read, @event
  end

  def new
    @event = current_user.events.build
  end

	def create
	  @event = current_user.events.build(event_params)
	  @event.coin = @coin
	  if @event.save!
	    redirect_to coin_event_path(@coin.id, @event.id)
	  else
	    render 'new'
	  end
	end

  def edit
  end

  def update
  	authorize! :update, @event
    if @event.update(event_params)
      redirect_to coin_event_path(@coin.id, @event.id)
    else
      redirect_to 'edit'
    end
  end

  def destroy
  	authorize! :destroy, @event
    @event.destroy
    redirect_to coin_events_path(@coin.id)
  end

  def approve
  	@event.update_attribute(:approved, true)
  end

  def upvote
  	@event = Event.find(params[:id] )
  	@event.upvote_by current_user
  	redirect_back(fallback_location: root_path)
  end

  def downvote
  	@event = Event.find(params[:id] )
  	@event.downvote_by current_user
  	redirect_back(fallback_location: root_path)
  end

  def pending
    authorize! :update, @event
    @events = Event.where(coin_id: @coin.id).order("created_at DESC")
    @pending = @events.select { |event| event.accepted == false }
    @coin_events = @coin.events.order(:date)
    @today = Date.current
  end

  def rejected
    authorize! :update, @event
    @events = Event.where(coin_id: @coin.id).order("created_at DESC")
    @rejected = @events.select { |event| event.rejected == true }
  end

  def flop
    authorize! :update, @event
    event = Event.find(params[:id])
    event.accepted = !event.accepted
    if event.accepted?
      event.pending = false
      event.rejected = false
    elsif !event.accepted?
      event.pending = true
    end
    event.save
    redirect_to coin_events_path(event.coin_id)
  end

  def reject
    authorize! :update, @event
    event = Event.find(params[:id])
    event.rejected = !event.rejected
    event.accepted = false
    if event.rejected
      event.pending = false
    else
      event.pending = true
    end
    event.save
    redirect_to coin_events_path(event.coin_id)
  end

  private

  	def find_event
  		@event = Event.find(params[:id])
  	end

    def find_coin
      @coin = Coin.find(params[:coin_id])
    end

  	def event_params
  		params.require(:event).permit(:content, :link, :date, :time, :city, :state, 
  									  :country, :description, :accepted)
  	end


end
