Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :posts, only: [:index, :create, :show]
    resources :users, only: [:index, :show]
    resource :session, only: [:create, :destroy, :show]
  end
end
