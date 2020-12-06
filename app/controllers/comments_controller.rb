class CommentsController < ActionController::Base

  def create
    puts params[:comment][:comment_user_id]
    @user = User.find(params[:comment][:comment_user_id])
    @comment = Comment.create(
      {
        photo_id: params[:comment][:photo_id],
        user_id: params[:comment][:comment_user_id],
        comment: params[:comment][:comment]
      })
    if @comment
      flash[:notice]= "Your comment was submitted."
    else
      flash[:alert]= "Error. Your comment was not submitted. Please try again."
    end
    redirect_to user_path(session[:user_id])
  end
end
