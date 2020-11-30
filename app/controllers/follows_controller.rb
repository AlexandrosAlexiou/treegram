class FollowsController < ApplicationController

  def new
    self.create
  end

  def create
    # follower_id = session[:user_id]
    # followed_id = params[:user_id]
    @follower = User.find(session[:user_id])
    @followed_id = User.find(params[:user_id])
    logger.debug "Follower: #{@follower.id}, Following: #{@followed_id.id}"
    if Follow.create({follower_id: @follower.id, followed_id: @followed_id.id})
      flash[:notice]= "You are now following #{@followed_id.email}"
      redirect_to users_path
    end
  end

  private
  def relation_params
    params.require(:follow).permit( :follower_id, :followed_id)
  end

end