class QuestionsController < ApplicationController

  load_and_authorize_resource param_method: :question_params,except:[:display_term_keyplayer]
  before_action :find_question, only: [:show, :edit, :update, :destroy, :accepted?]
  before_action :find_coin,except:[:editor_images,:geteditor_images,:display_term_keyplayer]
  before_action :find_ques_num, only: [:index]
  before_action :find_top5_users_terms
  before_action :find_top5_users_kp
  before_action :authenticate_user!
  before_action :find_user
  skip_before_action :verify_authenticity_token, :only => [:editor_images]
  before_action :ensure_url_params,only:[:new]

  def index  
    authorize! :index, @question

    if params[:ques_num].blank?
      @questions = Question.where(coin_id: @coin.id).order("created_at DESC")
    else
      @questions = Question.where(ques_num: @num, coin_id: @coin.id).order("created_at DESC")
    end

    # if params[:ques_num].blank?
    #   @search = Question.ransack(params[:q])
    #   @questions = @search.result(distinct: true).where(coin_id: @coin.id)
    # else
    #   @search = Question.ransack(params[:q])
    #   @questions = @search.result(distinct: true).where(ques_num: @num, coin_id: @coin.id)
    # end
 
  end
  
  def show 
  	authorize! :read, @question
  end


  def new
  	@coin
    @question = current_user.questions.build
  end


	def create
	  @question = current_user.questions.build(question_params)
	  if @question.save
	    redirect_to coin_question_path(@coin.id, @question.id)
	  else
	    render 'new'
	  end
	end


  def update
  	authorize! :update, @question
    if @question.update(question_params)
      redirect_to coin_question_path(@coin.id, @question.id)
    else
      redirect_to 'edit'
    end
  end


  def destroy
  	authorize! :destroy, @question
    @question.destroy
    redirect_to coin_path(@coin.id)
  end


  def display_term_keyplayer
    if params[:ques_num].present? 
      @questions = Question.where("ques_num=? AND accepted=?",params[:ques_num],true)
    else
     render file: "#{Rails.root}/public/404", status: :not_found
    end
  end


  def geteditor_images
    @host = request.protocol+request.host_with_port 
    @editor_images = current_user.editor_files
    @CKEditorFuncNum = params[:CKEditorFuncNum]
  end


  def editor_images
    file = current_user.editor_files.build(file: params[:upload])
    if file.save
      host = request.protocol+request.host_with_port 
      render html: "<h6 > Link: #{host}#{file.file.url} </h6>".html_safe
    else
      render plain: "Unable to send image. #{file.errors.full_messages.first}"
    end
  end


  private

  	def find_question
  		@question = Question.find(params[:id])
  	end


  	def find_ques_num
  		@num = params.fetch(:ques_num)
  	end


    def find_coin
      @coin = Coin.find(params[:coin_id])
    end


    def find_user
      @user = current_user
    end


    def find_top5_users_terms
      @top5_terms = User.all.sort{|a,b| a.questions.where("ques_num=? AND accepted=?", 2, true).count <=> b.questions.where(ques_num: 2, accepted: true).count}.reverse.first(5)
    end


    def find_top5_users_kp
      @top5_kp  = User.all.sort{|a,b| a.questions.where("ques_num=? AND accepted=?", 3, true).count <=> b.questions.where(ques_num: 3, accepted: true).count}.reverse.first(5)
    end


  	def accpeted?
   		@question.accepted
  	end


    def ensure_url_params
      if params[:ques_num].present?
        logger.info("THis is ensure_url_params")
          return
      else
          render file: "#{Rails.root}/public/404", status: :not_found
      end
    end


  	def question_params
  		params.require(:question).permit(:content, :ques_num, :coin_id, :accepted, :term, :description)
  	end

end
