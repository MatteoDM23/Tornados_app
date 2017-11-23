class HailController < ApplicationController
  
  def show
     @country = params[:country]
     if @country != nil
      @message = "Total number of tornadoes in #{@country} in 2016 is:#{Hail.where(:st => @country).count}"
     else
      @message = "No State has been selected"
     end
  end
  
end
