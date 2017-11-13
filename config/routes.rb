Rails.application.routes.draw do
  
  # show homepage route
  root 'static_pages#home'
  
  # static pages routes
  get  '/about',   to: 'static_pages#about'
  get  '/contact', to: 'static_pages#contact'
  get  '/time', to: 'chart#time'
  get  '/feed', to: 'chart#feed'
  
  # sign-up routes: show page and process form
  get  '/signup', to: 'users#new'
  post '/signup',  to: 'users#create'
  
  # log-in routes: show page and process form
  get  'sessions/new'
  get  '/login',   to: 'sessions#new'
  post '/login',   to: 'sessions#create'
  
  # log-out routes: process the form
  delete '/logout',  to: 'sessions#destroy'
  
  # resourceful routes for Create, Retrieve, Update and Destroy users
  resources :users

end