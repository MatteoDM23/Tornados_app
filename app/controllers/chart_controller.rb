class ChartController < ApplicationController
  before_action :is_logged_in
  
  def is_logged_in
    redirect_to("/login") if current_user.blank?
  end
  
  def time
    @number_of_tornadoes = Tornado.where(:st => "AL").count
  end

  def feed
  end
  
  
end
