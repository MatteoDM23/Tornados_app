class ChartController < ApplicationController
  before_action :is_logged_in
  
  def is_logged_in
    redirect_to("/login") if current_user.blank?
  end
  
  def time
   
  end

  def feed
     @state = params[:state]
     if @state != nil
      @text = "Total number of tornadoes in #{@state} in 2016 is:#{Tornado.where(:st => @state).count}"
     else
      @text = "No State has been selected"
     end
  end

end
