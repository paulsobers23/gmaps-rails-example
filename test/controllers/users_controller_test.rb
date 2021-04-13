require "test_helper"

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "users can be succesffuly created" do
    post "/users",
         params: {username: "Paul", password: "password"}, as: :json
    assert_equal 200, status
  end
end
