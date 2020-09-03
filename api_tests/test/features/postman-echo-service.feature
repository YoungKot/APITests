Feature: Test postman echo services
    In order to create cookies, retrieve them and remove one of them
    As a QA
    I want to provide 3 cookies as params in Get request, then I want to retrieve created cookies using other Get req 
    and using another GET req remove one of them y providing name as params

Scenario: create and delete cookies
    Given postman echo service
    When I set three cookies
    And I set url to retrieve all cookies
    And I create a parameter to delete a specific cookie
    Then the cookies are set
    And the set of cookies is retrieved
    And the cookie is removed from the set