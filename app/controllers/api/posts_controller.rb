class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    render :index
  end

  def create
    @post = Post.create!(post_params)
    render :show
  end

  private

  def post_params
    params.require(:post).permit(
      :content,
      :created_at
    )
  end


end
