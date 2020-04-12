class Api::TracksController < ApplicationController
    #before_action :ensure_logged_in
     skip_before_action :verify_authenticity_token

    def create
        @track = Track.new(track_params)
        @track.artist_id = params[:user_id]
        
        if @track.save!
            render 'api/users/show'
        else
            flash[:errors] = @track.errors.full_messages 
        end
    end

    def update
       @track = Track.find(params[:id])
       @track.artist_id = params[:user_id]
       flash[:errors]= @track.errors.full_messages unless @track.artist = current_user && @track.update(track_params)
       render 'api/users/show'
    end

    def index
        @tracks = Track.all 
        render 'api/tracks/index'
    end


    def show
        @track = Track.find(params[:id])
        render 'api/tracks/show'
    end
    
    def destroy
        @track = current_user.tracks.find_by(id: params[:id])
        if @track && @track.delete 
            render 'api/users/show'
        end
    end

      def track_params 
        params.require(:track).permit(:title)
    end
    
end
