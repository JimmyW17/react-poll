Rails.application.routes.draw do
  resources :polls do
    resources :choices
    resources :comment
  end
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
end
