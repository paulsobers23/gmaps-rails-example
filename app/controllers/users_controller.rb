class UsersController < ApplicationController
  def create
    @user = User.create(
      username: params[:username],
      password: params[:password])
  end
  render json: @user

end
