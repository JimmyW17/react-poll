class HomeController < ApplicationController
  def index
    @test_props = {message: 'Testing react, this is a prop'}
  end
end
