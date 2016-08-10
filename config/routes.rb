Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :posts, only: [:index, :create]
  end

  root "static_pages#root"
end
