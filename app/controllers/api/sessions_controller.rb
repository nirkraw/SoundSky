class Api::SessionsController < ApplicationController
skip_before_action :verify_authenticity_token
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            log_in(@user)
            # render "api/users/show"
        else
            render json: ["Username or password is invalid"], status: 401
        end
    end
    
    def destroy
        if current_user 
            logout_user  
            render json: ["Logged out succesfuly"]
        else
            render json: ['Log in first'], status: 404 
        end
    end
    
end
