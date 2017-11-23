class TwitterController < ApplicationController
  
  def show
    @town = params[:town]
  end

end
