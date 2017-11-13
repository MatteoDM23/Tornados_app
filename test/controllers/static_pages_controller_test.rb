# This is a test file used for the test driven development process. Each test ensures the URL of each page can be accessed,
# and the title of each page is correct.

require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  
  def setup
    @base_title1 = "CS2012 Assignment 2: Earthquake Data App"
  end
  
  test "should get home" do
    get root_path
    assert_response :success
    assert_select "title", "#{@base_title1}"
  end
  
  test "should get about" do
    get about_path
    assert_response :success
    assert_select "title", "About | #{@base_title1}"
  end
  
    test "should get contact" do
    get contact_path
    assert_response :success
    assert_select "title", "Contact | #{@base_title1}"
  end
  
  
end
