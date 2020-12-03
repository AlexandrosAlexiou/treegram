class CommentsController < ActionController::Base

  def create
    @user = User.find(params[:comment][:comment_user_id])
    @comment = Comment.create(
      {
        photo_id: params[:comment][:photo_id],
        user_id: params[:comment][:comment_user_id],
        comment: params[:comment][:comment]
      })
    redirect_to user_path(session[:user_id])
  end
end
