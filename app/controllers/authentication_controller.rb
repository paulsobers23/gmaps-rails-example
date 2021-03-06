class AuthenticationController < ApplicationController
  def login
    @user = User.find_by(username: params[:username])

    if !@user
      render json: {error: 'Wrong Username'}
    else
      if !@user.authenticate(params[:password])
        render json: {error: 'Wrong password'}
      else
        payload = { user_id: @user.id}
        secret = Rails.application.secret_key_base
        token = JWT.encode(payload, secret)
        render json: {token: token}
      end
    end

  end
end
