class Api::LikesController < ApplicationController

    def create
        @like = Like.new(like_params)
        @like.save 
    end

    def destroy
        @like = Like.find(params[:likeId])
        @like.delete      
    end

    def like_params 
        params.require(:like).permit(:user_id, :track_id)
    end
    
end