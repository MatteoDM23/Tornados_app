class HailController < ApplicationController
  
   def show
    @country = params[:country]
    if @country != nil
     @message = "Total number of hail storms in #{@country} in 2016 is:#{Hail.where(:st => @country).count}"
    else
     @message = "No State has been selected yet"
    end
    return @message
   end
  
end
