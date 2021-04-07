Rails.application.routes.draw do
  resources :users, only: :create
  resources :places

  post "login", to: "authentication#login"
end
