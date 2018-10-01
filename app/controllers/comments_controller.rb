class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]
  before_action :find_post, only: [:show, :edit, :update, :destroy ]
  before_action :find_coin
  before_action :authenticate_user!

  def index
    @comments = Comment.all
  end

  def show
  end

  def new
    @comment = Comment.new
  end

  def edit
  end

  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.new(comment_params)
    @comment.user = current_user

    respond_to do |format|
      if @comment.save
        format.html { redirect_to coin_post_path(@post.coin_id, @post.id), notice: 'Comment was successfully created.' }
        format.json { render :show, status: :created, location: @comment }
      else
        format.html { render :new }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @comment.update(comment_params)
        format.html { redirect_to @comment, notice: 'Comment was successfully updated.' }
        format.json { render :show, status: :ok, location: @comment }
      else
        format.html { render :edit }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @comment.destroy
    redirect_to coin_post_path(@coin.id, @post.id)
  end

  private

    def set_comment
      @comment = Comment.find(params[:id])
    end

    def find_post
      @post = Post.find(params[:post_id])
    end

    def find_coin
      @coin = Coin.find(params[:coin_id])
    end



    def comment_params
      params.require(:comment).permit(:post_id, :body, :user_id)
    end
end
