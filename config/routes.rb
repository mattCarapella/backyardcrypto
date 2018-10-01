 Rails.application.routes.draw do
  resources :comments
  get 'posts/new'

  devise_for :views
  root 'static_pages#home'
  get '/faq', to: 'static_pages#FAQ'
  get '/about', to: 'static_pages#about'
  get '/about', to: 'static_pages#about'
  get '/disclaimer', to: 'static_pages#disclaimer'
  get '/privacy', to: 'static_pages#privacy'
  get '/contact', to: 'static_pages#contact'
  get '/team', to: 'static_pages#team'
  get '/payouts', to: 'static_pages#payouts'
  get '/modhandbook', to: 'static_pages#modhandbook'
  get '/editorhandbook', to: 'static_pages#editorhandbook'
  get '/donations', to: 'static_pages#donations'
  get '/apply', to: 'static_pages#apply'
  get '/display/questions',to: 'questions#display_term_keyplayer'

  devise_for :users

  post '/ckeditor/pictures',to: 'questions#editor_images'
  get '/ckeditor/pictures',to: 'questions#geteditor_images'

  resources :users do
    resources :payouts
  end

  resources :posts do
    member do
      put "like", to: "posts#upvote"
      put "dislike", to: "posts#downvote"
    end
    resources :comments
  end

  resources :account_activations, only: [:edit]
  resources :genres
  
  resources :coins do

    get 'pending', to: 'coins#pending', on: :collection
    member do 
      get :flop
    end

  	resources :questions

  	resources :events do
      get 'pending', to: 'events#pending', on: :collection
      get 'rejected', to: 'events#rejected', on: :collection
      member do
        get :flop
        get :reject
        put "like", to: "events#upvote"
        put "dislike", to: "events#downvote"
      end
    end

  	resources :posts do
  		member do
        get :flop
  			put "like", to: "posts#upvote"
  			put "dislike", to: "posts#downvote"
  		end
      resources :comments
  	end

  	resources :links do
      get 'pending', to: 'links#pending', on: :collection
      get 'rejected', to: 'links#rejected', on: :collection
      member do 
        get :flop
      end
      member do 
        get :reject
      end
    end
  end
end
