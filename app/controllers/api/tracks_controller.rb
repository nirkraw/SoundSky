class Api::TracksController < ApplicationController

    def create
        @track = Track.new(create_track_params)
        if @track.save!
            @track.photo.attach(photo_param[:photo])
            @track.audio.attach(audio_param[:audio])
            render json: 'api/tracks/show'
        else
            render json: @track.errors.full_messages  
        end
    end

    def update
        @track = Track.find(params[:id])
        if !(photo_param[:photo].instance_of? String)
            @track.photo.destroy
            @track.photo.attach(photo_param[:photo])
        end
        
        if @track.update(update_track_params)
            render "api/tracks/show"
        else
            render @track.errors.full_messages, status: 401
        end
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
        @track = Track.find(params[:id])
        @track.delete 
        render 'api/tracks/show'
    end

    def create_track_params 
        # params.require(:track).permit(:title, :artist_id, :genre, :description, :photo, :audio)
        params.require(:track).permit(:title, :artist_id, :genre, :description)
    end

    def update_track_params
        params.require(:track).permit(:title, :artist_id, :genre, :description)
    end

    def photo_param
        params.require(:track).permit(:photo)
    end

    def audio_param
        params.require(:track).permit(:audio)
    end
    
end
