class HomeController < ApplicationController
  def index
    @user = {name: 'Jimmy'}
    @signed_in = user_signed_in?
  end
end
