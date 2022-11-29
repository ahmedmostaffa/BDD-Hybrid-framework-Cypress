Feature: add to cart 


Background: preconditions steps (run before every scenario)
    Given user open login page
    When user enter "standard_user" and "secret_sauce"
    Then user navigate to home page


Scenario: user add multiple products to cart
    Given home page is displayed
    When user select all the products
    Then All the selected products are present 
    And the count of the selected items is 6   

    