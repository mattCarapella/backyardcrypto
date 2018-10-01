class Ability
  include CanCan::Ability

  def initialize(user)

    user ||= User.new

    # Admin abilities
    if user.admin?
      can :manage, :all

    # Moderator abilities
    elsif user.moderator?
      can :manage, :all
      cannot :destroy, Coin
			cannot :destroy, Event
			cannot :destroy, Question
			cannot :destroy, Link

    # User abilities
    else
      can :read, Coin
      can :create, Coin

      cannot :index, Question
      can :create, Question
      can :read, Question do |question|
      	question.user == user
      end
      can :update, Question do |question|
      	question.user == user and not question.accepted
      end
      cannot :destroy, Question

      can :index, Event
      can :create, Event
      can :read, Event
      can :update, Event do |event|
      	event.user == user and not event.accepted
      end
      cannot :destroy, Event

      cannot :index, Link
	  	can :create, Link
	  	can :read, Link do |link|
	  		link.user == user and not link.accepted
	  	end
      cannot :update, Link
      cannot :destroy, Link

      can :read, Post
      can :create, Post
      can :update, Post do |post|
      	post.user == user
      end
      can :destroy, Post do |post|
      	post.user == user
      end
    end
	end
end
