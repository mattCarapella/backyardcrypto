class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    added_attrs = [:username, :email, :password, :password_confirmation, :remember_me,:fname,:lname,:wallet]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end

	rescue_from CanCan::AccessDenied do |exception|
    redirect_to coins_path, :alert => exception.message
  end
end
