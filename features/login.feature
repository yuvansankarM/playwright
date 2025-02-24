Feature: Login Functionality

  As a registered user
  I want to login to the Demoblaze website
  So that I can access my account

  Scenario: Successful login with valid credentials
    Given I navigate to the Demoblaze homepage
    When I login with username "pavanol" and password "test@123"
    