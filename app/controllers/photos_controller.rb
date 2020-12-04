class PhotosController < ApplicationController

  # def new
  #   @user = User.find(params[:user_id])
  #   @photo = Photo.create
  # end

  def create
    @user = User.find(params[:user_id])
    if params[:photo] == nil
      flash[:alert] = "Please upload a photo"
      redirect_to :back
    else
      @photo = Photo.create(photo_params)
      @photo.user_id = @user.id
      @photo.save
      flash[:notice] = "Successfully uploaded a photo"
      redirect_to user_path(@user)
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    @photo.comments.each do |comment|
      comment.destroy
    end
    @photo.tags.each do |tag|
      tag.destroy
    end
    flash[:notice] = "Photo '#{@photo.id}' deleted."
    redirect_to :back
  end

  private
  def photo_params
    params.require(:photo).permit(:image, :title)
  end
end
