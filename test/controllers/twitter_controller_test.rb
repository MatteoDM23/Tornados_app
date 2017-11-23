require 'test_helper'

class TwitterControllerTest < ActionDispatch::IntegrationTest
  
  test "should get Storms Forecast" do
    get twitter_show_url
    assert_response :success
  end

end
