class Api::CommentsController < ApplicationController

    def create
        @comment = Comment.new(comment_params)
        @comment.save 
    end

    def destroy
        @comment = Comment.find(params[:commentId])
        @comment.delete      
    end

    def comment_params 
        params.require(:comment).permit(:user_id, :track_id, :parent_comment_id)
    end
end

