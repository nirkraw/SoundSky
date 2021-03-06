Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :index, :show] 
    resource :session, only: [:create, :destroy]
    resources :tracks, except: [:new, :edit]
    resource :likes, only: [:create, :destroy]
    resource :comments, only: [:create, :destroy]
  end
  
  root to: 'root#root'
end
