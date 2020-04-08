class Api::UsersController < ApplicationController
 skip_before_action :verify_authenticity_token

    def show
        @user = User.find(params[:id])
        # render 'api/users/show'
    end

    def create
        @user = User.new(user_params)
        if @user.save 
            log_in(@user)
            # render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 401
        end

    end


    def user_params 
        params.require(:user).permit(:username, :password)
    end
end
