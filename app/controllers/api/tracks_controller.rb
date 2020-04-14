class Api::TracksController < ApplicationController

    def create
        if params[:track][:audio] == "null"
             render json: ["Please upload a track"], status: 422
        elsif params[:track][:photo] == "null"
            render json: ["Please add a picture"], status: 422
        elsif params[:track][:title] == ""
            render json: ["Enter a title"], status: 422
        else 
            @track = Track.new(track_params)
            if @track.save!
                render json: ["Track was successfully uploaded!"]
            else
                render json: @track.errors.full_messages  
            end
        end
    end

    def update
       @track = Track.find(params[:id])
       render json: @track.errors.full_messages unless @track.artist = current_user && @track.update(track_params)
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
         @track = Track.find(params[:id])
        if @track && @track.delete 
            render 'api/users/show'
        end
    end

    def track_params 
        params.require(:track).permit(:title, :artist_id, :genre, :description, :photo, :audio)
    end
    
end
