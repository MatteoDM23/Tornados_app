require 'test_helper'

class ChartControllerTest < ActionDispatch::IntegrationTest

    def setup
      @base_title2 = "CS2012 Assignment 2: Earthquake Data App"
    end
    
    test "should get time" do
      get time_path
      assert_response :success
      assert_select "title", "#{@base_title2}"
    end
  
    test "should get feed" do
      get feed_path
      assert_response :success
      assert_select "title", "Feed | #{@base_title2}"
    end
  
end

  # test "should get new" do
  #   get signup_path
  #   assert_response :success
  #   assert_select "title", "Sign Up | #{@base_title5}"
  # end
