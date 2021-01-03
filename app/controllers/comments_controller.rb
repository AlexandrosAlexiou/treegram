class CommentsController < ActionController::Base

  def create
    @user = User.find(params[:user_id])
    @comment = Comment.create(
      {
        photo_id: params[:photo_id],
        user_id: params[:user_id],
        comment: params[:comment][:content]
      })
    if @comment
      flash[:notice]= "Your comment was submitted."
    else
      flash[:alert]= "Error. Your comment was not submitted. Please try again."
    end
    redirect_to user_path(session[:user_id])
  end

  def index
    @user = User.find(params[:user_id])
    @photo= Photo.find(params[:photo_id])
    render(:partial => 'comments/comments', :object =>{:photo => @photo, :user =>@user} ) if request.xhr?
  end

end
