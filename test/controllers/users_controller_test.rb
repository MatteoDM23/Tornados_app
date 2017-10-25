require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  
    def setup
    @base_title5 = "CS2012 Assignment 2: Earthquake Data App"
    end
  
  test "should get new" do
    get signup_path
    assert_response :success
    assert_select "title", "Sign Up | #{@base_title5}"
  end

end
