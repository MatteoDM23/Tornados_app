require 'test_helper'

class HailControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get hail_show_url
    assert_response :success
  end

end
