class GenresController < ApplicationController

	before_action :find_genre, only: [:show, :edit, :update, :destroy ]

	def index
		@genres = Genre.all.each_slice(4).to_a
	end

	def new
	end

	def show
		@genre = Genre.friendly.find(params[:id])
		@coins_in_genre = @genre.coins
	end

	def new
		@genre = Genre.new
	end

	def create
		@genre = Genre.new(genre_params)
		if @genre.save
	    redirect_to genres_path
	  else
	    render 'new'
	  end
	end

	def update
	end

	def destroy
		authorize! :destroy, @genre
		@genre.destroy
		redirect_to genres_path
	end

	private

		def genre_params
			params.require(:genre).permit(:name, :displayname)
		end

		def find_genre
			@genre = Genre.friendly.find(params[:id])
		end

		def find_coin
			@coin = Coin.find(params[:id])
		end
end
