require 'test_helper'

class ChartControllerTest < ActionDispatch::IntegrationTest

    def setup
      @user = users(:michael)
      @base_title2 = "CS2012 Assignment 2: Earthquake Data App"
    end
    
    test "should get Report 2016 - part1" do
      log_in_as(@user)
      get time_path
      assert_response :success
      assert_select "title", "Feed | #{@base_title2}"
    end
  
    test "should get Report 2016 - part2" do
      log_in_as(@user)
      get feed_path
      assert_response :success
      assert_select "title", "Feed | #{@base_title2}"
    end
    
end
