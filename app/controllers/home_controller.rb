class HomeController < ApplicationController
  def index
    @user = {name: 'Jimmy'}
  end
end
