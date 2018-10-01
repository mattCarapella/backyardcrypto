class PostsController < ApplicationController
  
  before_action :find_post, only: [:show, :edit, :update, :destroy ]
  before_action :find_coin
	before_action :authenticate_user!

  def index  
    @posts = Post.where(coin_id: @coin.id).order("created_at DESC")
  end
  
  def show
  	authorize! :read, @post
  end

  def new
    @post = current_user.posts.build
  end

	def create
	  @post = current_user.posts.build(post_params)
	  @post.coin = @coin
	  if @post.save!
	    redirect_to coin_post_path(@coin.id, @post.id)
	  else
	    render 'new'
	  end
	end
  
  def edit
  end

  def update
  
    if @post.update(post_params)
      redirect_to coin_post_path(@coin.id, @post.id)
    else
      redirect_to 'edit'
    end
  end	

  def destroy
  	authorize! :destroy, @post
    @post.destroy
    redirect_to coin_posts_path(@coin.id)
  end

  def upvote
    @post = Post.find(params[:id] )
    @post.upvote_by current_user
    redirect_back(fallback_location: root_path)
  end

  def downvote
    @post = Post.find(params[:id] )
    @post.downvote_by current_user
    redirect_back(fallback_location: root_path)
  end

  private

		def find_post
			@post = Post.find(params[:id])
		end

	  def find_coin
	    @coin = Coin.find(params[:coin_id])
	  end

		def post_params
			params.require(:post).permit(:content, :url, :title, :ytlink, :user_id)
		end




end
