Rails.application.routes.draw do
  resources :polls
  resources :polls do
    resources :comments
  end
  devise_for :users
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
end
