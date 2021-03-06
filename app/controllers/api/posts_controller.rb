class Api::PostsController < ApplicationController
  
  before_action :ensure_user_logged_in
  
  def index
    @posts = Post.order(created_at: :desc).all
  end

  def create
    @post = current_user.posts.create!(post_params)
    render :show
  end

  def show
    @post = Post.find(params[:id])
  end

  private

    def post_params
      params.require(:post).permit(:title, :image)
    end
end
