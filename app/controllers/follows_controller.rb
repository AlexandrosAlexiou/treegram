class FollowsController < ApplicationController

  def new
    self.create
  end

  def create
    @follower = User.find(session[:user_id])
    @followed = User.find(params[:user_id])
    logger.debug "Follower: #{@follower.id}, Following: #{@followed.id}"
    if Follow.create({follower_id: @follower.id, followed_id: @followed.id})
      flash[:notice]= "You are now following #{@followed.email}"
      redirect_to users_path
    end
  end

  def destroy
    if Follow.where(:follower_id => params[:user_id], :followed_id => params[:id]).destroy_all
      flash[:notice]= "You have unfollowed #{User.find(params[:id]).email}"
      redirect_to :back
    end
  end

end